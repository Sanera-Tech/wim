import React from "react";
import "../../styles/product_page/PhotosPage.css";
import floatingBag from "/floatingBag.png"; // Replace with the actual path
import powder from "/powder.png"; // Replace with the actual path
import labelInfo from "/labelInfo.png"; // Replace with the actual path
import upfrontBag from "/upfrontBag.png"; // Replace with the actual path
import womanByPool from "/womanByPool.png"; // Replace with the actual path

const PhotosPage = () => {
  return (
    <div className="photos-page">
      <div className="upper-container">
        <div className="photo-item biggest">
          <img src={floatingBag} alt="Floating Bag" />
        </div>
        <div className="vertical-container">
          <div className="photo-item small">
            <img src={powder} alt="Powder" />
          </div>
          <div className="photo-item small">
            <img src={labelInfo} alt="Label Info" />
          </div>
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
