import { decimalToFraction } from "../utils/mathHelpers";

const FractionChallenge = ({ targetFraction, targetColor }) => {
  return (
    <div className="m-2">
      <p>
        Fill {decimalToFraction(targetFraction)} of the grid with the color{" "}
        <span
          style={{
            backgroundColor: `${targetColor}`,
            display: "inline-block",
            width: "20px",
            height: "20px",
          }}
        ></span>
      </p>
    </div>
  );
};

export default FractionChallenge;
