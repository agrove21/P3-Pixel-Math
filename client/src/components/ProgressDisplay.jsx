import { useState } from "react";

const ProgressDisplay = ({ color, targetFraction, calculateFraction, calculateDecimal }) => {
    const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    const fraction = calculateDecimal(color);
    if (parseFloat(fraction) >= targetFraction) {
      setFeedback("Great job! You've filled the target fraction.");
    } else {
      setFeedback("Keep going to reach the target fraction!");
    }
  };

  return (
    <div>
      <button onClick={handleCheck}
      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-green-600 transition mb-4"
      >Check Progress</button>
      <p>{feedback}</p>
        <p>
        Fraction of grid filled with{" "}
        <span
          style={{
            backgroundColor: `${color}`,
            display: "inline-block",
            width: "20px",
            height: "20px",
          }}
        ></span>
        : {calculateFraction(color)}
      </p>
      <p>Decimal: {calculateDecimal(color)}</p>
    </div>
  );
};

export default ProgressDisplay;
