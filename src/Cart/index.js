import React from "react";
import { deleteProduct } from "../actions/action";
import { connect } from "react-redux";

export function Cart(props) {
  var totals = 0;
  const renderListCart = () => {
    return props.cart.map((product) => {
      totals += product.price * product.quantity;
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>
            {product.quantity === undefined ? (
              <div>{`${product.price}`}</div>
            ) : (
              <div> {`${product.price}` * `${product.quantity}`}</div>
            )}
          </td>
          <td>
            {product.quantity === undefined ? (
              <div>{`${product.quantity}`}</div>
            ) : (
              <div> {`${product.quantity}`}</div>
            )}
          </td>
          <td>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => props.deleteProduct(product)}
              >
                X
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderListCart()}</tbody>
      </table>
      <h3>Total: {totals} VND</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) => {
      dispatch(deleteProduct(product_current));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
