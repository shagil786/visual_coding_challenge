import React, { useState } from "react";
import { useSelector } from "react-redux";

const SayMessageWithTimer = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (el && el2) {
      el2.style.display = "none";
      if (state.show_msg) {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
        return;
      }
      setState({ ...state, show_msg: true });

      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = state.timer_message;
      window.setTimeout(() => {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
      }, state.timer_for_msg * 1000);
    }
  };

  return (
    <div className="bg-violet-800 text-white rounded-lg p-4 my-2 shadow-md flex flex-col gap-4 text-sm">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <label className="text-white mr-4">Message:</label>
          <input
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              setState({
                ...state,
                timer_message: e.target.value,
              });
            }}
            className="border border-gray-300 rounded text-black w-full px-1"
          />
        </div>
        <div className="flex items-center">
          <label className="text-white mr-4">Timer (seconds):</label>
          <input
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setState({
                  ...state,
                  timer_for_msg: value,
                });
              }
            }}
            className="border border-gray-300 rounded text-black w-full px-1"
          />
        </div>
        <button
          id={comp_id}
          onClick={displayMessage}
          className="bg-violet-700 text-white py-2 px-4 rounded cursor-pointer"
        >
          {`Say ${state.timer_message}`}
        </button>
      </div>
    </div>
  );
};

export default SayMessageWithTimer;
