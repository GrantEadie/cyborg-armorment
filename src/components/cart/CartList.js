import React from "react";
import CartPart from "./CartPart";
import PropTypes from "prop-types";


function CartList(props) {
  return (
    <React.Fragment>
    <hr />
      <h2>Your Cart</h2>
      <hr />
      {props.cartList.map((part, index) =>
        <CartPart
          partName={part.partName}
          partBodyType={part.partBodyType}
          partDescription={part.partDescription}
          partQuantity={part.partQuantity}
          partPrice={part.partPrice}
          cartTotal={part.cartTotal}
          key={index} 
          id={part.id}
          onDeleteCartPart={props.onDeleteCartPart}/>
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  onDeleteCartPart: PropTypes.func,
  cartList: PropTypes.array
}



export default CartList;