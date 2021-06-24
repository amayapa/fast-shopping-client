import React from "react";
import PropTypes from "prop-types";
import {
  CardItem,
  Price,
  Title,
  Quantity,
  Picker,
  SecondHalf,
  PriceWrapper,
} from "../styles/cartItem";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  updateCartProduct,
} from "../store/orderline/orderline.actions";
import { Theme } from "../styles/globalStyles";

const CartItem = (props = {}) => {
  const { orderline, stock, mode, border } = props;
  const { productsId, name, categories, price, quantity } = orderline || {};
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.orderlines);

  const subTotal = Number(price) * quantity;

  const handleOnDelete = () => {
    if (cart.length === 1) {
      history.push("/");
    }
    dispatch(deleteCartProduct(productsId));
  };

  const handleOnChange = (event) => {
    const quantitySelected = event.target.value;
    const subTotal = Number(price) * quantitySelected;
    const newCart = cart.filter(
      ({ productsId }) => productsId !== orderline.productsId
    );
    const updatedCart = [
      ...newCart,
      {
        ...orderline,
        quantity: Number(quantitySelected),
        subTotal,
      },
    ];
    dispatch(updateCartProduct(updatedCart));
  };

  return (
    <CardItem mode={mode} border={border}>
      <Title>
        <h3>{name}</h3>
        <h5>{categories}</h5>
      </Title>
      <SecondHalf>
        <PriceWrapper>
          <span>Unit Price</span>
          <Price margin={0}>{price}</Price>
        </PriceWrapper>
        <Quantity>
          <span>Quantity</span>
          <Picker
            onChange={handleOnChange}
            value={quantity}
            mode={mode}
            border={border}
          >
            {Array.apply(null, { length: stock }).map((n, i) => (
              <option key={n} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Picker>
        </Quantity>
        <DeleteForeverSharpIcon
          style={{
            color: Theme[mode].colors.text,
            marginLeft: 10,
            marginRight: 15,
            alignSelf: "flex-end",
            cursor: "pointer",
          }}
          onClick={handleOnDelete}
        />
        <Price margin="auto" fontSize="21px" width="80px">
          {subTotal}
        </Price>
      </SecondHalf>
    </CardItem>
  );
};

CartItem.propTypes = {
  props: PropTypes.shape({
    stock: PropTypes.number,
    orderline: PropTypes.shape({
      productsId: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      quantity: PropTypes.number,
    }),
  }),
};

export default CartItem;
