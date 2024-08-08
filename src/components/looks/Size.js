import React, { useState } from "react";
import { useSelector } from "react-redux";

const Size = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const [scale, setScale] = useState(1);

  const changeSize = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.transform = `scale(${scale})`;
    }
  };

  return (
    <div className="bg-violet-800 text-white rounded-lg p-4 my-4 text-sm w-full flex flex-col gap-4">
      <div className="grid grid-cols-2 items-center gap-4">
        <div>Size:</div>
        <input
          type="number"
          value={scale}
          onChange={(e) => {
            const value = e.target.value;
            setScale(value ? parseFloat(value) : 0);
          }}
          className="text-center border border-gray-300 rounded text-black"
        />
      </div>
      <button
        id={comp_id}
        onClick={changeSize}
        className="bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 w-full"
      >
        Size {scale}
      </button>
    </div>
  );
};

export default Size;
