import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  CardComponent,
  CardFooter,
  Description,
  Price,
  SubTitle,
  Title,
} from "../styles/card";
import { Button } from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCreatedOrderline,
  updateCartProduct,
} from "../store/orderline/orderline.actions";

const ProductCard = (props) => {
  const { productData, darkMode, rounded } = props;
  const dispatch = useDispatch();
  const [runnedOut, setRunnedOut] = useState(false);
  const { cart } = useSelector((state) => state.orderlines);
  const [categories, setCategories] = useState("");
  const [remaining, setRemaining] = useState(productData.stock);

  useEffect(() => {
    const prepareCategoriesToDisplay = () => {
      let stringOfCategories = "";
      productData.categories.forEach(({ name }) => {
        stringOfCategories
          ? (stringOfCategories += ", " + name)
          : (stringOfCategories += name);
      });
      setCategories(stringOfCategories);
    };

    prepareCategoriesToDisplay();
    // eslint-disable-next-line
  }, []);

  const checkForStock = (productId) => {
    const { quantity } =
      cart.find(({ productsId }) => productsId === productId) || {};
    if (productData.stock === 0) {
      setRunnedOut(true);
    } else if (quantity && quantity >= productData.stock) {
      setRunnedOut(true);
    } else if (quantity) {
      setRemaining(productData.stock - quantity);
    }
  };

  useEffect(() => {
    checkForStock(productData.id);
    // eslint-disable-next-line
  }, [cart]);

  const addToCart = () => {
    const productToUpdate = cart.find(
      ({ productsId }) => productsId === productData.id
    );
    if (!productToUpdate) {
      dispatch(
        setCreatedOrderline({
          ...productData,
          id: null,
          productsId: productData.id,
          quantity: 1,
          categories,
          subTotal: Number(productData.price),
        })
      );
    } else {
      const newCart = cart.filter(
        ({ productsId }) => productsId !== productData.id
      );
      const subTotal = productToUpdate.price * (productToUpdate.quantity + 1);
      const updatedCart = [
        ...newCart,
        {
          ...productToUpdate,
          quantity: productToUpdate.quantity + 1,
          subTotal,
        },
      ];
      dispatch(updateCartProduct(updatedCart));
    }
  };

  return (
    <CardComponent mode={darkMode} border={rounded}>
      <Title>{productData?.name}</Title>
      <SubTitle>{categories}</SubTitle>
      <Description className="p">
        <p>{productData?.description}</p>
      </Description>
      <CardFooter>
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Button
            disabled={runnedOut}
            onClick={addToCart}
            mode={darkMode}
            border={rounded}
          >
            Add to cart
          </Button>
          <span>
            {!runnedOut ? `${remaining} in stock` : "No products in stock"}
          </span>
        </span>
        <Price>{productData?.price}</Price>
      </CardFooter>
    </CardComponent>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object,
};

export default ProductCard;
