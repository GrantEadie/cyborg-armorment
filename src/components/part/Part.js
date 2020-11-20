import React from "react";
import PropTypes from "prop-types";

function Part(props){
  return (
    <React.Fragment>
      <div className="detailClick" onClick = {() => props.whenPartClicked(props.id)}>
        <p className="itemTitle">{props.partName}</p>
        <p>{props.partDescription}</p>
          <div className="detailBar">
            <p>{props.partPrice} ⅊ </p>
            <p>{props.partQuantity} <span id="stock">in stock</span></p>
          </div>
        </div>
        <button className="btn btn-outline-light btn-sm" onClick = {() => props.onBuyPart(props.id)}>Buy</button>
        <hr/>

    </React.Fragment>
  );
}

Part.propTypes = {
  partName: PropTypes.string,
  partDescription: PropTypes.string,
  partBodyType: PropTypes.string,
  partQuantity: PropTypes.number,
  partPrice:PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number,
  whenPartClicked: PropTypes.func,
  onBuyPart: PropTypes.func
};

export default Part;