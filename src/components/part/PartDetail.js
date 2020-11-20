import React from "react";
import PropTypes from "prop-types";

function PartDetail(props){
  const { part, onClickingDelete} = props;
  
  return (
    <React.Fragment>
      <h1>Part Detail</h1>
      <h3>Name: {part.partName}</h3>
      <p>Description: {part.partDescription}</p>
      <h4>Quantity: {part.partQuantity}</h4>
      <button className="btn btn-outline-danger btn-block" onClick={() => onClickingDelete(part.id) }>Delete This Part</button>
      <button className="btn btn-outline-light btn-block" onClick={ props.onClickingEdit }>Edit This Part</button>

      <hr/>
    </React.Fragment>
  );
}

PartDetail.propTypes = {
  part: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PartDetail;

// className="btn btn-outline-danger btn-block"