import React, { useState } from "react";
import { useSelector } from "react-redux";

const GotoXY = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const [state, setState] = useState({ goto_x: 0, goto_y: 0 });

  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    if (el) {
      el.style.position = "relative";
      el.style.left = `${state.goto_x}px`;
      el.style.top = `${state.goto_y}px`;
    }
  };

  return (
    <div className="bg-violet-800 text-white rounded-lg p-4 my-1 text-sm">
      <div className="grid grid-cols-2 items-center gap-4 mb-4">
        <div className="text-white">X</div>
        <input
          type="number"
          value={state.goto_x}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setState({ ...state, goto_x: value });
            }
          }}
          className="text-center border border-gray-300 rounded text-black"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4 mb-4">
        <div className="text-white">Y</div>
        <input
          type="number"
          value={state.goto_y}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setState({ ...state, goto_y: value });
            }
          }}
          className="text-center border border-gray-300 rounded text-black"
        />
      </div>
      <div
        id={comp_id}
        onClick={gotoXY}
        className="bg-violet-600 text-white py-2 px-4 rounded cursor-pointer text-center"
      >
        {`Go to X: ${state.goto_x} Y: ${state.goto_y}`}
      </div>
    </div>
  );
};

export default GotoXY;
