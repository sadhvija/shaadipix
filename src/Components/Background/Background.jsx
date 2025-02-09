import React, { useState } from "react";
import "./Background.css";

const Mandaps = [
  {
    image: './images/public/North.png',
    styel: "NORTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/south.png",
    styel: "SOUTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/beach.png",
    styel: "BEACHSIDE MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const WorldMandapas = [
  {
    image: "./images/public/world1.png",
    styel: "Luxury Ballrooms",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/world2.png",
    styel: "Garden Weddings",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/world3.png",
    styel: "Rustic Ban Weddings",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const Dreamy = [
  {
    image: "./images/public/destination1.png",
    styel: "ROYAL PALACE SETTINGS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/destination2.png",
    styel: "ROYAL PALACE SETTINGS 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image:"./images/public/destination3.png",
    styel: "DESTINATION INSPIRED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

function Background() {
  const [activeComponent, setActiveComponent] = useState("Component1");

  return (
    <>
      <div className="Header">
        <h1>Shadipix</h1>
        <div className="UserName">10kCoders</div>
        <div className="Coins">
          <span>100</span>
          <button className="tokens">Add Tokens</button>
        </div>
      </div>
      <div className="mainBackground">
        <div className="venu">
          <h2>VENUE</h2>
          <img src="./images/public/VENUE.png" alt="Venue" />
        </div>

        <div className="Mandaps">
          <button onClick={() => setActiveComponent("Component1")}>Indian Mandaps</button>
          <button onClick={() => setActiveComponent("Component2")}>World Inspired Weddings</button>
          <button onClick={() => setActiveComponent("Component3")}>Fairytale & Dreamy Settings</button>
        </div>

        <div className="ramhere">
          {activeComponent === "Component1" && <MandapList data={Mandaps} />}
          {activeComponent === "Component2" && <MandapList data={WorldMandapas} />}
          {activeComponent === "Component3" && <MandapList data={Dreamy} />}
        </div>
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

export default Background;