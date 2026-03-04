import { useState, useEffect } from "react";
import { spritePrinter } from "../api/pokeAPi";
import Navbar from "./navbar";

function Gallery() {
  const [sprites, setSprite] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = await spritePrinter();
      setSprite(images);
    }

    loadImages();
  }, []);

  return (
    <div className="galleryContainer">
      <Navbar />
      <h1>Pokemon Api</h1>
      <div className="images-grid" id="imageContainer">
        {sprites.map((sprite, index) => (
          <img src={sprite} key={index} alt="pokemon-image" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
