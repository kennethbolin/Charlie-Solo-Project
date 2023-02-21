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
        <h1 className="title">This is the Header</h1>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  );
}
export default Header;
