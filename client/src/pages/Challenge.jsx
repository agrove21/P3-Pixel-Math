import { useEffect, useState } from "react";
import PixelGrid from "../components/PixelGrid";
import GridControls from "../components/GridControls";
import ColorPicker from "../components/ColorPicker";
import ProgressDisplay from "../components/ProgressDisplay";
import FractionChallenge from "../components/FractionChallenge";

function Challenge() {
  const [gridSize, setGridSize] = useState(10);
  const [pixels, setPixels] = useState(
    Array(gridSize * gridSize).fill("#f6f6f6")
  );

  //Reset the grid
  function resetGrid() {
    setPixels(Array(gridSize * gridSize).fill("#f6f6f6"));
  }

  //Update the grid size
  function updateGridSize(newSize) {
    setGridSize(newSize);
    resetGrid();
  }

  //Save the current grid
  function saveGrid() {
    localStorage.setItem("pixels", JSON.stringify(pixels));
    alert("Design saved!");
  }

  const [selectedColor, setSelectedColor] = useState("#000000");

  const calculateFraction = (color) => {
    const colorCount = pixels.filter(
      (pixelColor) => pixelColor === color
    ).length;
    return `${colorCount}/${pixels.length}`;
  };

  const calculateDecimal = (color) => {
    const colorCount = pixels.filter(
      (pixelColor) => pixelColor === color
    ).length;
    return (colorCount / pixels.length).toFixed(2);
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="w-1/3 p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-4">Your Challenge:</h1>
      <FractionChallenge
        targetFraction={0.25}
        targetColor={selectedColor}
        calculateDecimal={calculateDecimal}
      />
      <ProgressDisplay
        targetFraction={0.25}
        color={selectedColor}
        calculateFraction={calculateFraction}
        calculateDecimal={calculateDecimal}
      />
      </div>
      <div className="w-2/3 p-5 flex flex-col items-center">
      <ColorPicker
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      <PixelGrid
        pixels={pixels}
        setPixels={setPixels}
        gridSize={gridSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <GridControls onSave={saveGrid} onReset={resetGrid} />
    </div>
    </div>
  );
}

export default Challenge;
