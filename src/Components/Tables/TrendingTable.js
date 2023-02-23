import React from 'react';
import "./TrendingTable.css";
import {useState, useEffect} from 'react';



function TrendingTable () {
     
  const [data, setData] = useState([])
  
  useEffect(() =>{
    fetchData()
  }, [])

  async function fetchData () {
    fetch('https://api.coingecko.com/api/v3/search/trending')
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
            <th>Price in BTC</th>
            <th>Market Cap Rank</th>
          </tr>
        </thead>
        {
          data.map(coin => (
            <tbody>
              <tr key={coin.name}>
                <td>{coin.item.name}</td>
                <td>{coin.item.price_btc}</td>
                <td>{coin.item.market_cap_rank}</td>
              </tr>
          </tbody>
          ))
        }

      </table>
    </div>
  )

}
  ;

export default TrendingTable
