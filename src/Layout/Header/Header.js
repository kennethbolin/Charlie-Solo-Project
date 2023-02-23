import { useState } from "react";
import "./Header.css";
import logo from '../../logo.svg';

//define helper functions and variables here

function Header(props) {
  // const {
  // //destructure props
  // } = props
  //define state

  //component logic

  return (
    <div>
      <div className="header">
      <div className="logo">
          <img src={logo} alt="logo"/>
      </div>
      <h2>
        <marquee className="title">Welcome to CoinTrends!   Where we help you stay ahead of the curve</marquee>
      </h2>
      </div>
    </div>
  );
}
export default Header;
