import React, { useState } from "react";
import { useSelector } from "react-redux";

const Move = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const [steps, setSteps] = useState(0);

  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    if (el) {
      const left = el.offsetLeft;
      el.style.position = "relative";
      el.style.left = `${left + steps}px`;
    }
  };

  return (
    <div className="bg-violet-800 text-white rounded-lg p-4 my-1 text-center text-sm">
      <div>
        Move X
        <input
          type="number"
          className="text-black text-center w-16 mx-2 border border-gray-300 rounded"
          value={steps}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setSteps(isNaN(value) ? 0 : value);
          }}
        />
        steps
      </div>
      <div
        id={comp_id}
        className="bg-violet-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer rounded"
        onClick={handleClick}
      >
        Move
      </div>
    </div>
  );
};

export default Move;
