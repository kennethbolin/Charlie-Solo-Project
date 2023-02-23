import React from 'react';
import "./BM-Table.css";
import {useState, useEffect} from 'react';



const BiggestMoversTable = function() {
  
    const [data, setData] = useState([])
  
    useEffect(() =>{
      fetchData()
    }, [])
  
    async function fetchData () {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24hr')
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
              <th>Price</th>
              <th>24hr Price change</th>
            </tr>
          </thead>
          {
            data.map(coin => (
              <tbody>
                <tr key={coin.name}>
                  <td>{<img className="image"src={coin.image}></img>}{coin.name}</td>
                  <td>{coin.current_price}</td>
                  <td>{coin.price_change_percentage_24h}</td>
                </tr>
            </tbody>
            ))
          }
  
        </table>
      </div>
    )
  
  }
  

export default BiggestMoversTable
