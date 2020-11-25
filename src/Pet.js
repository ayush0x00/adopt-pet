import React from "react";
const Pet = ({ name, animal, breed }) => {
  //can use props but its old way. This is called destructuring of props
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name), //can use props.name
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

export default Pet;
