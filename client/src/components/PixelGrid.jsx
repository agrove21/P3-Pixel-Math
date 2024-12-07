import { useState } from "react";

const PixelGrid = ({
  pixels,
  setPixels,
  gridSize,
  selectedColor,
  setSelectedColor,
}) => {
  const handlePixelClick = (index) => {
    // Change the color of the clicked pixel
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          padding: "20px",
          gridTemplateColumns: `repeat(${gridSize}, 40px)`,
          gap: "2px",
        }}
      >
        {/* Render each pixel */}
        {pixels.map((color, index) => (
          <div
            key={index}
            onClick={() => handlePixelClick(index)}
            style={{
              width: 40,
              height: 40,
              backgroundColor: color,
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelGrid;
