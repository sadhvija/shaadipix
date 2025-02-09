import React, { useState } from "react";
import "./Dresses.css";



const Bride = [
  {
    image: "./images/public/outfit1.png",
    styel: "RED LEHENGA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit2.png",
    styel: "KANJIVARAM SAREE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit3.png",
    styel: "SHERWANI",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit4.png",
    styel: "DHOTI KURTA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const Groom = [
  {
    image: "./images/public/outfit5.png",
    styel: "WHITE WEDDING GOWN",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit6.png",
    styel: "INDO-WESTERN GOWN",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit7.png",
    styel: "TUXEDO IN BLACK",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const Couple = [
  {
    image:"./images/public/outfit8.png",
    styel: "AFRICAN WEAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit9.png",
    styel: "WOMENS AFRICAN WEAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "./images/public/outfit10.png",
    styel: "JAPNESE WEAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

function Dress() {
  const [activeComponent, setActiveComponent] = useState("Component1");

  return (
    <>
     <div className="mainBackground">
        <div className="venu">
          <h2>OUTFITS</h2>
          <img src="./images/public/VENUE.png" alt="dress" />
        </div>
        </div>
        <div className="Mandaps">
          <button onClick={() => setActiveComponent("Component1")}>TRADITIONAL OUTFIT</button>
          <button onClick={() => setActiveComponent("Component2")}>WESTERN ATTIRE</button>
          <button onClick={() => setActiveComponent("Component3")}> CULTURE VARITATIONS</button>
        </div>

        <div className="ramhere">
          {activeComponent === "Component1" && <MandapList data={Bride} />}
          {activeComponent === "Component2" && <MandapList data={Groom} />}
          {activeComponent === "Component3" && <MandapList data={Couple} />}
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

export default Dress;