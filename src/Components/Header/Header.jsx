import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
import { Selectbar } from "../SelectOptions/SelectOptons";


const Header = ({onNavigate}) => {
   const navigate=useNavigate();

   return (
      <>
         <div class="body"><>
            <header class="header">
               <nav class="nav">
                  <div class="title"> <p>SHAADIPIX</p></div>
                  <div class="navbar">
                     <button id="home">Home</button>
                     <button id="home">About</button>
                     <button id="home">Services</button>
                     <button id="home">Contact</button>
                     <button id="login">Login</button>
                  </div>
               </nav>
               <div class="banner">
                  <p>THE PORTRAITS OF LIFETIME, CREATED INSTANTLY</p>
                  <span id="tag">Upload your photo and get high definition wedding pictures in dream</span>
                  <span class="tagline">locations,outfits, and poses - without a real photoshoot</span>
               </div>
               <div>
                  <button id="free" onClick={onNavigate}>Try ShaadiPix for Free<img src="./images/sparkle.png" height={16} width={16}></img></button>
               </div>
               {/* <img src="../images/rightflower.png"></img>  */}

               <div class="Four_cards">


                  <div class="cards_container">
                     <img id="img1" src="./images/couple.jpg" width={452}></img>
                     <img id="img1" src="./images/couple.jpg" width={452}></img>
                     <img id="img1" src="./images/couple.jpg" width={452}></img>
                     <img id="img1" src="./images/couple.jpg" width={452}></img>

                  </div>
                  <div><img id="img2" src="./images/marriage.jpg" width={452} height={452}></img></div>
               </div>
            </header>
            <div id="cardbox">
               <div id="tools">
                  <div><img src="./images/sparkle.png" width={53} height={53}></img></div>
                  <div class="cards">
                     <span id="head">AI-Powered Photo Transformations</span>
                     <span id="descript" >converts casual pictures into stunning wedding images</span>
                  </div>
               </div>
               <div id="tools">
                  <div><img src="./images/globe.png" width={53} height={53}></img></div>
                  <div class="cards">
                     <span id="head">Multiple Themes & Locations</span>
                     <span id="descript">Users can choose from traditional,modern,royal,or outdoor themes.</span>
                  </div>
               </div>
               <div id="tools">
                  <div><img src="../images/location.png" width={53} height={53}></img></div>
                  <div class="cards">
                     <span id="head">Ultra-HD Quality & Realistic Editing</span>
                     <span id="descript">Sharp details and high-end retouching. Realistic Poses and Angles.</span>
                  </div>
               </div>
               <div id="tools">
                  <div><img src="./images/time.png" width={53} height={53}></img></div>
                  <div class="cards">
                     <span id="head">Fast Turnaround</span>
                     <span id="descript">AI-generated images within minutes/hours</span>
                  </div>
               </div>
               <div id="tools">
                  <div><img src="./images/hamburger.png" width={53} height={53}></img></div>
                  <div class="cards">
                     <span id="head">Subscription Benefits</span>
                     <span id="descript">Exclusive perks for subscribers, like more themes or faster processing</span>
                  </div>
               </div>
            </div>
            <div>
               <p class="header2">THE PORTRAITS OF A LIFETIME,CREATED INSTANTLY </p>
            </div>
            <div class="contains">

               <div class="containers">
                  <div class="align">
                     <div id="cards_text">
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                     </div>
                     <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                  </div>
                  <div class="horizontal" >
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple4.png" width="206px" height="206px"></img>
                  </div>
               </div>
               <div class="containers">
                  <div class="align">
                     <div id="cards_text">
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                     </div>
                     <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                  </div>

                  <div class="horizontal">
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple4.png" width="206px" height="206px" ></img>
                  </div>
               </div>
               <div class="containers">
                  <div class="align">
                     <div id="cards_text">
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                        <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                     </div>
                     <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                  </div>
                  <div class="horizontal">
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                     <img id="cards" src="./images/couple4.png" width="206px" height="206px" ></img>
                  </div>
               </div>
            </div>
            {/* <Sidebar/> */}
            <div class="black_card">

               <span id="part" >User Photos</span>
               <div>
                  <div class="section">
                     <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                     <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                     <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                     <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                  </div>
               </div>
               <div id="part2">
                  <div class="accordianset">

                     <Selectbar name="Background" />
                     <Selectbar name="Outfit" />
                     <Selectbar name="Pose" />
                     {/* <img src="./images/accordian.png" width={194.1} height={42.1}></img>
                     <img src="./images/accordian.png" width={194.1} height={42.1}></img>
                     <img src="./images/accordian.png" width={194.1} height={42.1}></img> */}
                  </div>
                  {/* <div>
                        <div class="accordion" id="accordionExample" >
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ width: "194.19px" }} >
                                    <div><p id="background">Background</p>
                                       <span id="texts">Lore ipsum do dira sum</span>
                                    </div>
                                 </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong><code>.accordion-body</code>, though the transition does limit overflow.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>  */}
               </div>
               <span id="part" >Generation Mode</span>
               <div id="buttons">
                  <button id="fast">Fast</button>
                  <button id="quality">Quality</button>
               </div>
               <span id="part1">Image Dimensions</span>
               <div class="media">
                  <img src="./images/phn1.png" width={40} height={45}></img>
                  <img src="./images/phn2.png" width={40} height={45}></img>
                  <img src="./images/phn2.png" width={40} height={45}></img>
                  <img src="./images/phn2.png" width={40} height={45}></img>
               </div>
               <span id="part">Number of Images</span>
               <div class="numbers">
                  <button id="number_of_images">1</button>
                  <button id="number_of_images">2</button>
                  <button id="number_of_images">3</button>
                  <button id="number_of_images">4</button>
               </div>

               <button id="generate">
                  <p>Generate</p>
                  <p><img src="./images/coins.png" width={14.5}></img> 100</p>
               </button>


            </div>
           
         </>
         </div>
      </>
   );
};

export default Header;
