//imports
import BiggestMoversTable from "../Components/Tables/BM-Table"
import './Movers.css'

//define helper functions and variables here

function Movers(props) {

    const {
    //destructure props
    } = props
  
    //define state
  
    //component logic
  
    return (
      <div className="main">
        <h2>Largest movers in past 24 hours</h2>
        <div className='BMTable'> 
          <BiggestMoversTable/>
        </div> 
      </div>
    )
  }
  export default Movers