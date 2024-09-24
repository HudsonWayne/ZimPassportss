// src/components/banner/Banner.jsx
import "./Banner.css"; 
import PopularDocument from "../navbar/buttons/PopularDocument";
import bannerimg from "../../assets/images/illustration.svg"; // Path to your image

const Banner = () => {
  return (
    <div className="banner">
      <div className="container-one">
        <div className="text-section col-md-6">
          <h1>Create Your Passport <br /> & Visa Photos Online <br /> - Effortlessly and Professionally</h1>
          <p>Snap, Upload, and Relax: We ll Handle the Rest!</p>
          <div className="btn">
          < PopularDocument />
          </div>
        </div>
        <div className="image-section col-md-6">
          <img src={bannerimg} alt="Passport and Visa Photos" />
        </div>
      </div>
    </div>
  );
};

export default Banner; // Ensure this line is present