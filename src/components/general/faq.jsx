import React, { useState } from "react";
import "../../styles/general/faq.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  const faqs = [
    {
      question: "¿Por qué WIM The Healthy Bar?",
      answer:
        "Sabemos que lo primero que buscas cuando tienes un antojo es algo delicioso. WIM busca romper esquemas y ofrecerte la mejor barra del mercado, la más sabrosa, alta en proteína, para que te nutras, y alta en fibra, para que encuentres esa sensación de saciedad que estas buscando. ¡Así que ya sabes! No esperes más, súmate a la comunidad WIM y disfruta de una nueva forma de calmar tus antojos.",
    },
    {
      question: "¿Cómo consumir la barra?",
      answer:
        "Puedes disfrutar tu WIM The Healthy Bar de diferentes maneras según tu preferencia. Disfrútala a temperatura ambiente, refrigérala para una textura más firme o caliéntala unos segundos en el microondas para una experiencia más suave. ¡Encuentra tu #momentoWIMdeldía y hazlo único!",
    },
    {
      question: "¿Cuándo la consumo?",
      answer:
        "Nuestras barras están pensadas para cualquier momento del día. Son perfectas para esos momentos del #quécomo, cuando necesitas un snack saludable y delicioso. Ya sea en el desayuno, después del ejercicio, o como un antojo entre comidas ¡WIM The Healthy Bar es tu mejor compañía!",
    },
    {
      question: "¿Por qué la barra lleva un octógono de alto en grasas saturadas?",
      answer:
        "WIM The Healthy Bar lleva un octógono de alto en grasas saturadas, este se da como consecuencia de una regulación peruana que debemos cumplir. Sin embargo, es importante mencionar que en WIM utilizamos almendras y manteca de cacao, grasas 100% naturales y beneficiosas para tu salud. Así que quédate tranquilo y celebra tu #momentoWIMdeldía sin preocupaciones.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>PREGUNTAS FRECUENTES</h2>
      <hr></hr>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${expanded === index ? "expanded" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span
              className={`chevron ${expanded === index ? "expanded" : ""}`}
            ></span>
          </div>
          <div className={`faq-answer ${expanded === index ? "expanded" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
