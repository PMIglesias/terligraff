import React, { useState } from "react";

import "./gallery.css";

const Gallery = () => {
  const [maximizedImage, setMaximizedImage] = useState(null);
  const [maximizedLink, setMaximizedLink] = useState(null);

  const handleImageClick = (index, link) => {
    setMaximizedImage(index);
    setMaximizedLink(link);
  };

  const handleCloseMaximizedImage = () => {
    setMaximizedImage(null);
    setMaximizedLink(null);
  };

  const imageUrls = Array.from({ length: 27 }, (_, index) =>
    require(`../assets/img/${index + 1}.jpg`)
  );

  return (
    <div className="gallery">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`gallery-item ${
            maximizedImage === index ? "maximized" : ""
          }`}
        >
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(index, `https://example.com/image/${index + 1}`)
            }
          />
          {maximizedImage === index && (
            <div className="maximized-overlay">
              <a href={maximizedLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt={`Maximized Image ${index + 1}`}
                  onClick={(event) => event.stopPropagation()}
                />
              </a>
              <div className="close-button" onClick={handleCloseMaximizedImage}>
                &#10006;
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
