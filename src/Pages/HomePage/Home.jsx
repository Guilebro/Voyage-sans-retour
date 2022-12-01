import React, { useState } from "react";
import Destination from "../../Components/Destination/Destination";
import DestinationDetails from "../../Components/DestinationDetails/DestinationDetails";
import Navbar from "../../Components/Navbar/Navbar";
import Planisphere from "../../Components/Planisphere/Planisphere";
import "./Home.css";

const Home = () => {
  const [activityName, setActivityName] = useState("");
  return (
    <div>
      <Navbar />
      <div className="main_section">
        <Planisphere className="planisphere_component"/>
        <Destination activityName={activityName} setActivityName={setActivityName} className="destination_component"/>
      </div>
      <DestinationDetails activityName={activityName} />
    </div>
  );
};

export default Home;
