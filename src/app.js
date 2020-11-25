import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "Something important" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Caesar",
      animal: "dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "Liza",
      animal: "Bird",
      breed: "Imaginary breed",
    }),
    React.createElement(Pet, {
      name: "Groophy",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
