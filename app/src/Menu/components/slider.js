import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const images = [
  'https://picsum.photos/id/237/800/300',
  'https://picsum.photos/id/40/800/300',
  'https://picsum.photos/id/169/800/300',
  'https://picsum.photos/id/659/800/300',
  'https://picsum.photos/id/718/800/300',
  'https://picsum.photos/id/837/800/300',
  'https://picsum.photos/id/837/800/300',
  
];

export const Newslider = () => {
  return (
    <div className="carousel-container">
      <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          infinite
          disableButtonsControls
          disableDotsControls
      >
       
       {images.map((image, index) => (
          <div ><img key={index} src={image} alt={`Imagem ${index + 1}`} /></div>
        
        ))}

      </AliceCarousel>
    </div>
  );
};

export default Newslider;
