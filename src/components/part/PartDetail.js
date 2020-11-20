import React from "react";
import PropTypes from "prop-types";

function PartDetail(props){
  const { part, onClickingDelete} = props;
  
  return (
    <React.Fragment>
      <h2>{part.partName}</h2><hr/>
      <p>{part.partDescription}</p>
        <div >
            <p className="detailBar">{props.partPrice} ⅊ </p>
            <p className="detailBar">{props.partQuantity} <span id="stock">in stock</span></p>
          </div>
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