import React, { useRef, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CompareSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const { offsetWidth, offsetHeight } = sliderRef.current;
      console.log(`Width: ${offsetWidth}px, Height: ${offsetHeight}px`);
    }
  }, []);

  const sliderStyle = {
    maxwidth: '1555px',
    maxheight: '675px',
    overflow: 'hidden', // Optional: to prevent content from overflowing
    position: 'relative', // Optional: if you need to position child elements
    borderRadius: '20px',
    border: '2px solid #f6f3dd',
  };

  return (
    <div ref={sliderRef} style={sliderStyle}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="blue slider.jpg" alt="Opened" />}
        itemTwo={<ReactCompareSliderImage src="oranger slider.jpg" alt="Unopened" />}
      />
    </div>
  );
};

export default CompareSlider;
