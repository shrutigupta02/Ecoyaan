import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [images, setImages] = useState([
    '/Media/carousel-1.png',
    '/Media/carousel-2.png',
    '/Media/carousel-3.png',
]);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [descriptions] = useState([
  'Buy Less, Buy Better!',
  'Follow us on instagram',
  'Are you a business that truly cares about sustainability?',
]);
const [buttonLabels] = useState(['About us', 'Follow us', 'Get in touch']);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000); 

  return () => clearInterval(interval);
}, [images]);

return (
  <div className="image-overlay" style={{ position: 'relative', width: '100%', height: '400px'}}>
    {/* Render the current image */}
    <img
      src={images[currentImageIndex]}
      alt="Slider"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    {/* Description and button overlay */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        // textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '600',
      }}
    >
      <p>{descriptions[currentImageIndex]}</p>
      <button
        style={{
          background: 'green',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {buttonLabels[currentImageIndex]}
      </button>
    </div>
  </div>
);
}

export default ImageSlider;
