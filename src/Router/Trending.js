//imports
import "./Trending.css"
import TrendingTable from "../Components/Tables/TrendingTable"
//define helper functions and variables here

function Trending(props) {

    const {
    //destructure props
    } = props
  
    //define state
  
    //component logic
  
    return (
      <div className="main">
        <h2>Top trending coins in past 24 hours</h2>
        <div className='TTable'> 
          <TrendingTable/>
        </div> 
      </div>
    )
  }
  export default Trending