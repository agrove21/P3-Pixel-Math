import { useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import PixelGrid from "../components/PixelGrid";
import GridControls from "../components/GridControls";
import ColorPicker from "../components/ColorPicker";
import FractionColors from "../components/FractionColors";
import ProgressDisplay from "../components/ProgressDisplay";
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

function Custom() {
  const [gridSize, setGridSize] = useState(10);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [pixels, setPixels] = useState(
    Array(gridSize * gridSize).fill("#f6f6f6")
  );
  const [reset, setReset] = useState(false);

  const [addPixel] = useMutation(mutation);

  //Reset the grid
  function resetGrid() {
    setPixels(Array(gridSize * gridSize).fill("#f6f6f6"));
    setReset(!reset);
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
      {/* Left Column: Challenge */}
      <div className="w-1/3 p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Design Your Own</h1>
        <p className="mb-6">
          Fill the grid with colors to create a unique design. Experiment with
          different colors and patterns to make your masterpiece!
        </p>
        <FractionColors 
        pixels={pixels}
        reset={reset}
        />
      </div>

      {/* Right Column: Grid and Controls */}
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
        <GridControls type={"design"} onSave={saveGrid} onReset={resetGrid} />
      </div>
    </div>
  );
}

export default Custom;
