//imports
import './Volume.css'
import VolumeTable from "../Components/Tables/V-Table"

//define helper functions and variables here

function Volume(props) {

    const {
    //destructure props
    } = props
  
    //define state
  
    //component logic
  
    return (
      <div className="main">
        <h2>Coins with the most volume traded in the past 24 hours</h2>
        <div className='VTable'> 
          <VolumeTable/>
        </div> 
      </div>
    )
  }
  export default Volume