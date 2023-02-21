import {Outlet} from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

function Layout(props) {
  
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom */}
      <Footer/>
    </div>
  );
}
export default Layout