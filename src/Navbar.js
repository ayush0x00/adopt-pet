/** @jsx jsx */
import React from "react";
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/react";

const NavBar = () => (
  <header
    css={css`
      background-color: pink;
      padding: 15px;
    `}
  >
    <Link to="/">Adopt me</Link>
    <span aria-label="logo">Logo</span>
  </header>
);

export default NavBar;
