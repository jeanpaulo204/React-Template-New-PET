import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

export const Newslider = ({primeiro , segundo , terceiro , quarto}) => {
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: 'carousel',
      autoplay: 3000,
      hoverpause: true,
      perView: 4,
      breakpoints: {
        1200: {
          perView: 3
        },
        992: {
          perView: 2
        },
        576: {
          perView: 1
        }
      }
    });

    glide.mount();

    return () => glide.destroy();
  }, []);

  return (
    <div className="glide" ref={glideRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
          <img className="Newimg" src={primeiro} alt="Descrição da imagem" />
          </li>
          <li className="glide__slide">
          <img className="Newimg" src={segundo} alt="Descrição da imagem" />
          </li>
          <li className="glide__slide">
          <img className="Newimg" src={terceiro} alt="Descrição da imagem" />
          </li>
          <li className="glide__slide">
          <img className="Newimg" src={quarto} alt="Descrição da imagem" />
          </li>
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
      </div>
    </div>
  );
};