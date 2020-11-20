import React from "react";
import CartPart from "./CartPart";
import PropTypes from "prop-types";


function CartList(props) {

  function cartTotal(props){
    console.log("is this getting in?")
    let cartOutput = 0;
    props.cartList.map((part, index) =>
    cartOutput = cartOutput + part.carTotal
    )
    return cartOutput;
  }

  return (
    <React.Fragment>
    <hr />
    <div className="cartDetails">
      <h2>Your Cart</h2>
      <p>your total: {props.cartList.map((part, index) => part.partPrice * part.cartTotal)}</p>
      </div>
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