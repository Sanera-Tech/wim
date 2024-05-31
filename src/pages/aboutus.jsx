import React from "react";
import "../styles/about_us/aboutus.css";
import AboutCard from "../components/home/aboutcard";
import CompareSlider from "../components/product_page/image-slider";
import FadeInObserver from "../components/general/FadeInObserver";

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <FadeInObserver>
      <div className="horizontal-info">
        <h1>
          SOMOS <span className="brand_name">WIM</span>
        </h1>
        <p>
        Ofrecemos snacks saludables, altos en proteína y fibra, sin azúcares añadidos
         y, lo más importante, ¡deliciosos! Nuestro objetivo es conectar tus antojos 
         con opciones balanceadas. ¡Sí, esos antojos!, aquellos que saltan entre comidas, 
         mientras estudias o trabajas, después de hacer ejercicio o en las noches cuando 
         no sabes qué comer. Queremos que te diviertas, comer sano no tiene por qué ser 
         aburrido, y en WIM hacemos de cada bocado una experiencia placentera y nutritiva.
        </p>
      </div>
      </FadeInObserver>
      <div className="horizontal-slider">
        <CompareSlider />
      </div>
      <FadeInObserver>
      <div className="vertical-info">
        <h1>Creemos en una alimentación saludable sin restricciones.</h1>
        <p>
        ¡Es posible disfrutar de tus snacks favoritos sin culpas! 
        En WIM Nutrition promovemos un estilo de vida activo, 
        balanceado y accesible para todos, por eso, utilizamos 
        productos naturales, altos en proteína y fibra, para una 
        alimentación verdadera y nutritiva. 
        </p>
      </div>

      <div className="horizontal-info standout_info">
        <div className="vertical-info">
          <h1>El momento WIM del día</h1>
          <p>
          ¡Es ese instante especial que transforma tu día! Ese 
          momento en el que te permites un antojo delicioso y 
          saludable sin remordimientos. Una celebración de la 
          libertad de elegir un snack que no solo te llena de 
          alegría, sino también de  bienestar. 
          </p>
          <p>
          Con WIM, cada bocado es una fiesta para tus sentidos. Estamos aquí 
          para acompañarte a disfrutar de esos momentos tan 
          especiales ¡Celebra tu #momentoWIMdeldía!
          </p>
        </div>
        <img src="car.jpg"></img>
      </div>

      <div className="about-card-info">
        <AboutCard />
        <AboutCard />
      </div>
      </FadeInObserver>
    </div>
  );
};

export default AboutUsSection;
