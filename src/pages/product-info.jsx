import React from 'react';
import PhotosPage from '../components/PhotosPage';
import ProductInfoCard from '../components/product-info-card'; 
import FAQ from '../components/faq';
import '../styles/product-info.css';

const ProductInfo = () => {
  const product = {
    title: "PROTEIN ICED COFFEE",
    description: "Upfront Protein iced coffee is relatively low in sugar (1g), high in protein (22g per shake!) and contains as much caffeine as a cup of coffee. Great to start your day with, or as a refreshing drink during warm weather.",
    weight: "1",
    serving: "33" 
  };

  return (
    <div className="product-container-main">
        <div className="product-image-container">
            <PhotosPage />
            <div className="product-details-container">
                <div className="info-container">
                    <ProductInfoCard product={product} /> 
                </div>
                <div className="info-container">
                    <button className="purchase">Add to Cart</button>
                </div>
                <div className="info-container">
                    <FAQ />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductInfo; 
