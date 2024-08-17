// src/components/FadeInObserver.jsx
import React, { useEffect } from 'react';
import '../../styles/general/fade.css';

const FadeInObserver = ({ children }) => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-wrapper > *');

    const appearOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    // Cleanup observer on unmount
    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);

  return <div className="fade-wrapper">{children}</div>;
};

export default FadeInObserver;
