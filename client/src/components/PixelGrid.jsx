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
      {/* Color Picker */}
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          gap: "2px",
        }}
      >
        {/* Render each pixel */}
        {pixels.map((color, index) => (
          <div
            key={index}
            onClick={() => handlePixelClick(index)}
            style={{
              width: 20,
              height: 20,
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
