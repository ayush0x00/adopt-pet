import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const Details = React.lazy(() => import("./Details"));
const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div id="something important">
        <NavBar />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
