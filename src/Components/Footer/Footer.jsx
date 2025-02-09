import React from "react";
import "./Footer.css";

const Footer = () => {
  return (<>
    <div id="shaadi">SHAADIPIX</div>
    <footer className="footer">

      <div className="footer-section">
        <h3>Services</h3>
        <p>AI Photo Generator</p>
        <p>Change Background</p>
        <p>Change Pose</p>
      </div>


      <div className="footer-section">
        <h3>Contact</h3>
        <div class="location">
          <img src="./images/newlocation.png" width={24} height={24}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="location">
          <img src="./images/message.png" width={24} height={24}></img>

          <p>Email: <a href="mailto:Testing@shaadipix.com">Testing@shaadipix.com</a></p>
        </div>
        <div class="location">
          <img src="./images/whatsapp.png" width={24} height={24}></img>

          <p>Phone: +91 8899978999 / 9988767888</p>
        </div>
      </div>


      <div className="footer-section">

        <h3>Company</h3>
        <div class="location">
          <img src="./images/about.png" width={24} height={24}></img>

          <p>About Us</p>
        </div>
        <div class="location">
          <img src="./images/careers.png" width={24} height={24}></img>

          <p>Careers</p>
        </div>
      </div>
    </footer>
    <div className="social-icons">
      <h3>Follow Us</h3>
      <div className="social-icons">
      <div class="location">
      <img src="./images/xx.png" width={24} height={24}></img> 
      </div>
        <div class="location">
          <img src="./images/linkedin.png" width={24} height={24}></img><a href="#">LinkedIn</a>
        </div>
        <div class="location">
          <img src="./images/instagram.png" width={24} height={24}></img>
          <a href="#">Instagram</a>
        </div>
        <div class="location">
          <img src="./images/youtube.png" width={24} height={24}></img>
          <a href="#">YouTube</a></div>
        <div class="location">
          <img src="./images/facebook.png" width={24} height={24}></img>
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
  </>
  );
};

export default Footer;