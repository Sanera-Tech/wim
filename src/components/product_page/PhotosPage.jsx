import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowWidth from "./useWindowWidth";
import "../../styles/product_page/PhotosPage.css";
import floatingBag from "/floatingBag.png"; // Replace with the actual path
import powder from "/powder.png"; // Replace with the actual path
import labelInfo from "/labelInfo.png"; // Replace with the actual path
import upfrontBag from "/upfrontBag.png"; // Replace with the actual path
import womanByPool from "/womanByPool.png"; // Replace with the actual path
import FadeInObserver from "../general/FadeInObserver";

const PhotosPage = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  if (isMobile) {
    return (
      <div className="photos-page">
        <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={3000}>
          <div className="photo-item biggest">
            <img src={floatingBag} alt="Floating Bag" />
          </div>
          <div className="photo-item">
            <img src={powder} alt="Powder" />
          </div>
          <div className="photo-item">
            <img src={labelInfo} alt="Label Info" />
          </div>
          <div className="photo-item">
            <img src={upfrontBag} alt="Upfront Bag" />
          </div>
          <div className="photo-item">
            <img src={womanByPool} alt="Woman by Pool" />
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
            <img src={powder} alt="Powder" />
          </div>
          <div className="photo-item small">
            <img src={labelInfo} alt="Label Info" />
          </div>
        </div>
        <div className="photo-item biggest">
          <img src={floatingBag} alt="Floating Bag" />
        </div>
      </div>
      <div className="lower-container">
        <div className="photo-item large">
          <img src={upfrontBag} alt="Upfront Bag" />
        </div>
        <div className="photo-item large">
          <img src={womanByPool} alt="Woman by Pool" />
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
