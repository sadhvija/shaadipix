import React, { useState } from "react";
import "./Pose.css";



const Romantic = [
  {
    image: "./images/public/pose1.png",
    styel:"UNDER THE STARS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image:"./images/public/pose2.png",
    styel: "PLAYFUL ROMANCE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const Candid = [
  {
    image: "./images/public/pose3.png",
    styel: "WALK OF HAPPINESS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/pose4.png",
    styel: "ETERNAL BOND",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];


function Pose() {
  const [activeComponent, setActiveComponent] = useState("Component1");

  return (
    <>
     <div className="mainBackground">
        <div className="venu">
          <h2>POSE</h2>
          <img src="./images/public/VENUE.png" alt="pose" />
        </div>
        </div>
        <div className="Mandaps">
          <button onClick={() => setActiveComponent("Component1")}>Romantic</button>
          <button onClick={() => setActiveComponent("Component2")}>Candid</button>
        </div>

        <div className="ramhere">
          {activeComponent === "Component1" && <MandapList data={Romantic} />}
          {activeComponent === "Component2" && <MandapList data={Candid} />}
      
        </div>
    </>
  );
}

const MandapList = ({ data }) => {
  return (
    <div className="mandapasBgimages">
      {data.map((item, index) => (
        <div key={index} className="mandap-card">
          <img src={item.image} alt={item.styel} className="mandap-image" />
          <div className="mandap-details">
            <h3>{item.styel}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pose;