import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowWidth from "./useWindowWidth";
import "../../styles/product_page/PhotosPage.css";
import products from "../general/products";

const PhotosPage = ( {photoIndex} ) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  if (isMobile) {
    return (
      <div className="photos-page">
        <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={3000}>
          <div className="photo-item biggest">
            <img src={products.at(photoIndex).bigimage} alt="Main Image" />
          </div>
          <div className="photo-item">
            <img src={products.at(photoIndex).smallimage1} alt="Small Image Top" />
          </div>
          <div className="photo-item">
            <img src={products.at(photoIndex).smallimage2} alt="Small Image Bottom" />
          </div>
          <div className="photo-item">
            <img src={products.at(photoIndex).bottomimage1} alt="Bottom Image First" />
          </div>
          <div className="photo-item">
            <img src={products.at(photoIndex).bottomimage2} alt="Bottom Image Second" />
          </div>
        </Carousel>
      </div>
    );
  }

  return (
    <div className="photos-page">
      <div className="upper-container">
        <div className="vertical-container">
          <div className="photo-item small">
            <img src={products.at(photoIndex).smallimage1} alt="Small Image Top" />
          </div>
          <div className="photo-item small">
            <img src={products.at(photoIndex).smallimage2} alt="Small Image Bottom" />
          </div>
        </div>
        <div className="photo-item biggest">
          <img src={products.at(photoIndex).bigimage} alt="Main Image" />
        </div>
      </div>
      <div className="lower-container">
        <div className="photo-item large">
          <img src={products.at(photoIndex).bottomimage1} alt="Bottom Image First" />
        </div>
        <div className="photo-item large">
          <img src={products.at(photoIndex).bottomimage2} alt="Bottom Image Second" />
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
