import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShoppingCart, { Actions, Title, Total } from "../styles/cart";
import { Button } from "../styles/globalStyles";
import CartItem from "./CartItem";
import CustomerForm from "./CustomerForm";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifyTotal, setCreatedOrder } from "../store/order/order.actions";
import { setFinishedOrder } from "../store/order/order.actions";
import { finishOrder } from "../api/orders";
import { emptyCart } from "../store/orderline/orderline.actions";
import { emptyProducts } from "../store/products/products.actions";

const Cart = ({ darkMode, rounded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.orderlines);
  const { total } = useSelector((state) => state.order);
  const { products } = useSelector((state) => state.products);

  const [formRows, setFormRows] = useState({
    name: {
      label: "Full Name",
      type: "text",
      value: "",
      required: true,
      name: "name",
    },
    id: { label: "ID", type: "text", value: "", required: true, name: "id" },
    address: {
      label: "Address",
      type: "textarea",
      value: "",
      required: true,
      name: "address",
    },
    phone: {
      label: "Phone Number",
      type: "tel",
      value: "",
      required: false,
      name: "phone",
    },
    email: {
      label: "Email",
      type: "email",
      value: "",
      required: true,
      name: "email",
    },
  });

  useEffect(() => {
    const total = cart.reduce(
      (acumulator, currentVlue) => acumulator + currentVlue.subTotal,
      0
    );
    dispatch(modifyTotal(total));
    // eslint-disable-next-line
  }, [cart]);

  const getStock = (orderlineId) => {
    return products.find(({ id }) => id === orderlineId)?.stock;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      fullName: formRows.name.value,
      id: formRows.id.value,
      address: formRows.address.value,
      phone: formRows.phone.value,
      email: formRows.email.value,
    };
    const orderlines = [];
    cart.forEach(({ productsId, quantity, subTotal }) => {
      orderlines.push({ productsId, quantity, subTotal });
    });
    finishOrder({
      total,
      orderlines,
    })
      .then(({ status, data }) => {
        if (status === 200) {
          dispatch(setCreatedOrder(data));
          dispatch(setFinishedOrder(userData));
          dispatch(emptyCart());
          dispatch(emptyProducts());
        }
      })
      .finally(() => {
        history.push("/thanks");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const input = event.target.name || "address";
    setFormRows({
      ...formRows,
      [input]: {
        ...formRows[input],
        value: event.target.value,
      },
    });
  };

  return (
    <ShoppingCart>
      <Helmet>
        <title> Shopping Cart</title>
      </Helmet>
      <Title>Shopping Cart</Title>
      {cart.map((orderline, index) => {
        return (
          <div key={index}>
            <CartItem
              mode={darkMode}
              border={rounded}
              orderline={orderline}
              stock={getStock(orderline.productsId)}
            />
          </div>
        );
      })}
      <Total>
        <h2>
          Total: <span>${total.toFixed(2)}</span>
        </h2>
      </Total>
      <Title>Ready to order?</Title>
      <form onSubmit={handleSubmit}>
        <CustomerForm
          formRows={formRows}
          handleChange={handleChange}
          mode={darkMode}
          border={rounded}
        />
        <Actions>
          <Button mode={darkMode} border={rounded} type="submit">
            Place Order
          </Button>
          <Link to="/">Back to List</Link>
        </Actions>
      </form>
    </ShoppingCart>
  );
};

export default Cart;
