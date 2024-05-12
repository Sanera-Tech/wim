import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const CompareSlider = () => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="img1.png" alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src="img2.png" alt="Image two" />}
    />
  );
};

export default CompareSlider;