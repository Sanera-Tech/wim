import React, { useState } from "react";
import "../../styles/general/faq.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  const faqs = [
    {
      question: "Why the protein iced coffee?",
      answer:
        "Our whey iced coffee is an alternative to all iced coffees on the supermarket shelves. This iced coffee contains as much caffeine per shake as a normal cup of coffee (60 mg), 22 grams of protein and only 1.6 grams of sugar.",
    },
    {
      question: "How do I prepare the whey iced coffee?",
      answer:
        "To prepare the whey iced coffee, simply mix one scoop of the powder with 250ml of cold water or milk and shake well. You can also blend it with ice for a thicker consistency.",
    },
    {
      question: "When do I use the protein iced coffee?",
      answer:
        "The protein iced coffee can be used as a post-workout recovery drink, a meal replacement, or a snack. It is a convenient way to get your daily dose of protein and caffeine.",
    },
    {
      question: "Allergens & Warnings",
      answer:
        "This product contains milk and soy. It is not suitable for people with milk or soy allergies. If you are pregnant, breastfeeding, or taking medication, please consult your doctor before using this product.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
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
