import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import PixelGrid from "../components/PixelGrid";
import GridControls from "../components/GridControls";
import ProgressDisplay from "../components/ProgressDisplay";
import FractionChallenge from "../components/FractionChallenge";
import { getRandomDecimal, getRandomColor } from "../utils/mathHelpers";
import { toast } from "react-toastify";

const mutation = gql`
  mutation AddPixel($name: String!, $design: [String]!) {
    addPixel(name: $name, design: $design) {
      _id
      design
      name
    }
  }
`;
function Challenge() {
  const [gridSize, setGridSize] = useState(10);
  const [selectedColor, setSelectedColor] = useState(getRandomColor());
  const [targetFraction, setTargetFraction] = useState(getRandomDecimal());
  const [pixels, setPixels] = useState(
    Array(gridSize * gridSize).fill("#f6f6f6")
  );

  const [addPixel] = useMutation(mutation);

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
  async function saveGrid() {
    const name = Date.now().toString();
    try {
      const res = await addPixel({ variables: { name, design: pixels } });
      console.log(res);
      // localStorage.setItem("pixels", JSON.stringify(pixels));
      toast("Design saved!", { type: "success", theme: "colored" });
    } catch (error) {
      toast("Error saving design", { type: "error", theme: "colored" });
    }
  }

  const newChallenge = () => {
    setTargetFraction(getRandomDecimal());
    setSelectedColor(getRandomColor());
    resetGrid();
  };

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
          targetFraction={targetFraction}
          targetColor={selectedColor}
          calculateDecimal={calculateDecimal}
        />
        <ProgressDisplay
          targetFraction={targetFraction}
          color={selectedColor}
          calculateFraction={calculateFraction}
          calculateDecimal={calculateDecimal}
        />
      </div>
      <div className="w-2/3 p-5 flex flex-col items-center">
        <PixelGrid
          pixels={pixels}
          setPixels={setPixels}
          gridSize={gridSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <GridControls
          onSave={saveGrid}
          onReset={resetGrid}
          onNew={newChallenge}
        />
      </div>
    </div>
  );
}

export default Challenge;
