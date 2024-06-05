import React, { useRef } from "react";
import ProductCard from "../general/product-card";
import "../../styles/home/products-carousel.css";
import FadeInObserver from "../general/FadeInObserver";
import products from "../general/products";

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

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches && carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div id="products" className="main-featured">
      <FadeInObserver>
      <h2 className="featured-title">Nuestros Productos</h2>
      <div ref={carouselRef} className="card-container small-card-container">
        {products.map((product, index) => (
          <a href={"./productos/"+product.carouselLink} key={index} className="small-card-link">
            <ProductCard product={product} />
          </a>
        ))}
      </div>
      </FadeInObserver>
    </div>
  );
};

export default ProductsCarousel;
