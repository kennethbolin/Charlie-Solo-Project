import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Router/Home'
import Volume from './Router/Volume'
import Movers from './Router/Movers'
import Layout from './Layout/Layout'
import Trending from './Router/Trending';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}> {/*Opening tag for the Layout Route Component*/}
          <Route index element={<Home />} /> {/*index defines the default child component*/}
          <Route path="volume" element={<Volume />} />
          <Route path="movers" element={<Movers />} />
          <Route path="trending" element={<Trending/>}/>
        </Route>{/*Closing tag for the Layout Route Component*/}
      </Routes>
    </div>
  )
}

export default App;
