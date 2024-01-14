import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { SideBar } from '../components/SideBar';
import React, { useState } from "react";

function App() {
  // use states for start and end lat and long
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');
  const [tags, setTags] = useState([]);

  const handleTags = newTags => {
    setTags(newTags);
    console.log("new tags" + tags);
  };

  const handleStartLatLong = newLatLong => {
    setStartLatLong(newLatLong);
    console.log("new LATLONG1" + newLatLong.lat);
  };

  const handleEndLatLong = newLatLong => {
    setEndLatLong(newLatLong);
    console.log("new LATLONG2" +newLatLong);
  };

  return (
    <div className="App">
      <SideBar onHandleStartLatLong={handleStartLatLong} onHandleEndLatLong={handleEndLatLong} tags={tags}/>
      <MapComponent start={startLatLong} end={endLatLong} onHandleTags={handleTags}/>
    </div>
  );
}

export default App;
