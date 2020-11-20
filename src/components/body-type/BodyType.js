import React from "react";
import PropTypes from "prop-types";
import Part from "../part/Part";

function BodyType(props){

  const ulStyle = {
    padding:0
  }

  return(
    <React.Fragment>
      <h3>{props.bodyType}</h3>
      <p><em>available parts</em></p>
      <hr/>
      <ul style={ulStyle}>
        {props.selection.map((part) =>
        <li><Part
        onBuyPart={props.onBuyPart}
        whenPartClicked = {props.onPartSelection}
        partName={part.partName}
        partDescription={part.partDescription} 
        partQuantity={part.partQuantity}             
        id={part.id}
        key={part.id}/>
        </li>
        )}
      </ul>

    </React.Fragment>
  )
}

BodyType.propTypes = {
  bodyType: PropTypes.string,
  selection: PropTypes.array,
  onPartSelection: PropTypes.func,
  onBuyPart: PropTypes.func,
  whenPartClicked: PropTypes.func
};
export default BodyType;