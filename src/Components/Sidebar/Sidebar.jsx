
import { Dimensions } from "../Dimensions/Dimensions.jsx";
import { Selectbar } from "../SelectOptions/SelectOptons.jsx"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <strong>User Photos</strong>
        <div className="upload-imgage">
          {[...Array(4)].map((_, index) => (
            <div className="images" key={index}>
              <img
                className="card-image"
                src="./images/couple.jpg"
                alt="User"
              />
            </div>
          ))}
        </div>
        
        <Selectbar name="Background" />
        <Selectbar name="Outfit" />
        <Selectbar name="Pose" />

        <h4>Generation Mode</h4>
        <div className="generate-mode">
          <button type="button" className="btn btn-outline-primary">Fast</button>
          <button type="button" className="btn btn-outline-primary">Quality</button>
        </div>

        <h4>Image Dimensions</h4>
        <Dimensions/>

        <h4>Number of Images</h4>
        <div className="no-of-images">
          {[1, 2, 3, 4].map((num) => (
            <div className="select-images" key={num}>{num}</div>
          ))}
        </div>

        <button type="button" className="btn btn-warning generate-btn">Generate</button>
      </div>
    </>
  );
};
export default Sidebar;