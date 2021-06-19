import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "../styles/globalStyles";
import { Congratulations } from "../styles/successScreen";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../store/order/order.actions";

export const SuccessScreen = ({ darkMode, rounded }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);

  const firstName = (fullName = "Lianel Artiles Sotolongo") =>
    fullName.substr(0, fullName.indexOf(" "));

  const emptyOrderStore = () => {
    dispatch(deleteOrder());
    history.push("/");
  };

  return (
    <Congratulations>
      <Helmet>
        <title>Thank you!</title>
      </Helmet>
      <h1>Thanks for your purchase</h1>
      <h2>{`${firstName(
        order.costumerData?.fullName
      )}, we have created your order #${
        order.id || Date.now()
      }. Your items will be soon at your door.`}</h2>
      <Button
        mode={darkMode}
        border={rounded}
        onClick={() => emptyOrderStore()}
      >
        Start Again
      </Button>
    </Congratulations>
  );
};
