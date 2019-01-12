import React from "react";
import Repeat from "react-repeat-component";

const Rating = props => (
  <div>
    Ocena:
    <Repeat times={props.rating}>
      {i => (
        <span key={i} onClick={() => props.onChange(i)}>
          *
        </span>
      )}
    </Repeat>
  </div>
);

export default Rating;
