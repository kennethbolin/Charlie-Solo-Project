import React from 'react';
import "./V-Table.css";
import {useState, useEffect} from 'react';



const VolumeTable = function() {
  const [data, setData] = useState([])

  useEffect(() =>{
    fetchData()
  }, [])

  async function fetchData () {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=25&page=1&sparkline=false')
      .then(response => response.json())
      .then(json => (
        setData(json)  //console.log(json)
      ))


  }
  
  return(
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        {
          data.map(coin => (
            <tbody>
              <tr key={coin.name}>
                <td>{<img className="image"src={coin.image}></img>}{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td>{coin.total_volume}</td>
              </tr>
          </tbody>
          ))
        }

      </table>
    </div>
  )
    }
  ;

export default VolumeTable
