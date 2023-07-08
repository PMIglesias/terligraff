import React from "react";
import Gallery from "../components/gallery";

const Project = () => {
  const images = Array.from(
    { length: 27 },
    (_, index) => `images/${index + 1}.jpg`
  );

  return (
    <div>
      <h1>Projects for clients</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Project;
