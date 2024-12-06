import { useEffect, useState } from "react";
import PixelGrid from "../components/PixelGrid";
import ProgressDisplay from "../components/ProgressDisplay";
import FractionChallenge from "../components/FractionChallenge";

function PixelScreen () {
    const [gridSize, setGridSize] = useState(10);
  const [pixels, setPixels] = useState(
    Array(gridSize * gridSize).fill("#FFFFFF")
  );

 //Reset the grid
 function resetGrid() {
    setPixels(Array(gridSize * gridSize).fill("#FFFFFF"));
  } 

  //Update the grid size
  function updateGridSize(newSize) {
    setGridSize(newSize);
    resetGrid();
  }

  //Save the current grid
  function saveGrid() {
    localStorage.setItem("pixels", JSON.stringify(pixels));
  }


    
  const [ selectedColor, setSelectedColor ] = useState("#000000");

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

  return <div>
    <h1>Pixel Math</h1>
    <FractionChallenge targetFraction={0.25} targetColor={selectedColor} calculateDecimal={calculateDecimal} />
    <PixelGrid pixels={pixels} setPixels={setPixels} gridSize={gridSize} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
    <ProgressDisplay targetFraction={0.25} color={selectedColor} calculateFraction={calculateFraction} calculateDecimal={calculateDecimal} />
  </div>;
}

export default PixelScreen;
