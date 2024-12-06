

const FractionChallenge = ({ targetFraction, targetColor }) => {
  
    return (
      <div>
        <p>
          Challenge: Fill {targetFraction * 100}% of the grid with the color{" "}
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