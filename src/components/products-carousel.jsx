import React, { useRef } from "react";
import ProductCard from "./product-card";
import "../styles/products-carousel.css";

const products = [
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
  {
    image: "xd.webp",
    title: "Whey Milkshake",
    weight: 1,
    servings: 33,
  },
];

const ProductsCarousel = () => {
  const carouselRef = useRef(null);

  const scrollAmount = window.matchMedia("(max-width: 768px)").matches
    ? 300
    : 3 * 300;
  const scrollDuration = 500;

  const scrollLeft = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
        duration: scrollDuration,
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
        duration: scrollDuration,
      });
    }
  };

  return (
    <div className="main-featured">
      <h2 className="featured-title">PRODUCTS</h2>
      <div ref={carouselRef} className="card-container small-card-container">
        {products.map((product, index) => (
          <a href="./productos/23" key={index} className="small-card-link">
            <ProductCard product={product} />
          </a>
        ))}
      </div>
      <button className="scroll-button scroll-left" onClick={scrollLeft}>
        ←
      </button>
      <button className="scroll-button scroll-right" onClick={scrollRight}>
        →
      </button>
    </div>
  );
};

export default ProductsCarousel;
