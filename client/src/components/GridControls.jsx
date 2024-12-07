

const GridControls = ({ onSave, onReset }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={onSave}
        className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
      >
        Save
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default GridControls;
