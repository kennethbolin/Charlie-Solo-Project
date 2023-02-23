import {Outlet} from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import "./Layout.css"

function Layout(props) {
  
  return (
    <div className="main">
      <Header/>
      <Navbar/>
      <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom */}
      <Footer/>
    </div>
  );
}
export default Layout