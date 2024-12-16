import { useState, useEffect } from "react";
import { colors } from "../utils/mathHelpers";

function FractionColors({ pixels, reset }) {
  const [selectedColorCount, setSelectedColorCount] = useState(
    colors.reduce((acc, color) => {
      acc[color] = 0;
      return acc;
    }, {})
  );

  const [userAnswer, setUserAnswer] = useState(
    colors.reduce((acc, color) => {
      acc[color] = 0;
      return acc;
    }, {})
  );

  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const newSelectedColorCount = colors.reduce((acc, color) => {
      acc[color] = pixels.filter((pixelColor) => pixelColor === color).length;
      return acc;
    }, {});
    setSelectedColorCount(newSelectedColorCount);
  }, [pixels]);

  useEffect(() => {
      resetUserAnswer();
  }, [reset]);

  const updateUserAnswer = (color, value) => {
    setUserAnswer({
      ...userAnswer,
      [color]: value,
    });
  };

  const checkAnswer = () => {
    const correct = Object.keys(userAnswer).every(
      (color) => userAnswer[color] === selectedColorCount[color]
    );

    setCorrect(correct);
  };

  function resetUserAnswer() {
    setUserAnswer(
      colors.reduce((acc, color) => {
        acc[color] = 0;
        return acc;
      }, {})
    );
    setCorrect(false);
  }

  return (
    <div className="flex flex-col gap-2 mt-4">
      {colors.map((color) => (
        <div className="flex gap-2 justify-start items-center" key={color}>
          <span
            style={{
              backgroundColor: `${color}`,
              display: "inline-block",
              width: "30px",
              height: "30px",
              border: "1px solid black",
            }}
          ></span>
          <span className="flex justify-between items-center ">
            <input
              className="w-12 border border-slate-300"
              type="number"
                value={userAnswer[color]}
              onChange={(e) => updateUserAnswer(color, +e.target.value)}
            />{" "}
            /100
          </span>
        </div>
      ))}
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-green-600 transition mb-4"
      >
        Check Answer
      </button>
      <div>
        {correct ? (
          <p className="text-green-600 text-center">Great job!</p>
        ) : (
          <p className="text-red-600 text-center">Try again</p>
        )}
      </div>
    </div>
  );
}

export default FractionColors;
