

const ColorPicker = ({ selectedColor, onColorChange }) => {
  const colors = [
    "#FF0000", // Red
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#008000", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#EE82EE", // Violet
    "#895129", // Brown
    "#000000", // Black
    "#FFFFFF", // White
  ];

  return (
    <div>
      <h3>Pick a Color:</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 40px)", gap: "10px", justifyContent: "center" }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => onColorChange(color)}
            style={{
              backgroundColor: color,
              width: 40,
              height: 40,
              border: `2px solid ${color === selectedColor ? "#000" : "#ccc"}`,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
