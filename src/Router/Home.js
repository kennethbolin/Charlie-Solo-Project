import MarketCapTable from '../Components/Tables/MC-Table'
import "./Home.css"
//imports

//define helper functions and variables here

function Home(props) {

    const {
    //destructure props
    } = props
  
    //define state
  
    //component logic
  
    return (
      <div className='main'>
        <h2>Top Coins by Market Cap</h2>
        <table className='MCTable'> 
          <MarketCapTable/>
        </table> 
      </div>
    )
  }
  export default Home