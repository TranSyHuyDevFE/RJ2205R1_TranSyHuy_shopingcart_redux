import React from "react";
import { buyProduct } from "../actions/action";
import { connect } from "react-redux";

export function Product(props) {
  const product_current = {
    id: props.id,
    name: props.name,
    price: props.price,
    quantity: props.quantity,
  };

  const renderListProduct = () => {
    return (
      <ul>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>
          <button
            className="btn btn-success"
            onClick={() => props.buyProduct(product_current)}
          >
            Buy
          </button>
        </li>
      </ul>
    );
  };
  return <div>{renderListProduct()}</div>;
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) => {
      dispatch(buyProduct(product_current));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
