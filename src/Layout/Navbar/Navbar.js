//imports
import "./Navbar.css"
import "../../App.css"
import { Link, NavLink } from 'react-router-dom'
//define helper functions and variables here

function Navbar (props) {

  const {
  //destructure props
  } = props

  //define state

  //component logic

  return (
    <div>
      <nav className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="movers">Largest Movers</NavLink>
        <NavLink to="volume">Most Volume Traded</NavLink>
        <NavLink to="trending">Top Trending</NavLink>
      </nav>
    </div>
  )
}
export default Navbar