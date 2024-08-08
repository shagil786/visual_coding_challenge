import React, { useState } from "react";
import { useSelector } from "react-redux";

const ThinkWithTimer = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
    character_id: "",
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      if (el2) el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true, character_id: character.active });
    if (el) {
      el.style.display = "inline-block";
      el.style.position = "relative";
      el.innerHTML = state.timer_message;
    }
    if (el2) {
      el2.style.display = "block";
      el2.style.position = "relative";
    }

    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      if (el2) el2.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <div className="bg-violet-800 text-white rounded-lg p-4 my-2 text-sm flex flex-col gap-4">
      <div className="grid grid-cols-2 items-center gap-4">
        <div>Message:</div>
        <input
          type="text"
          value={state.timer_message}
          onChange={(e) => {
            const value = e.target.value;
            setState({ ...state, timer_message: value });
          }}
          className="border border-gray-300 rounded text-black w-full px-1"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <div>Timer:</div>
        <input
          type="number"
          value={state.timer_for_msg}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) setState({ ...state, timer_for_msg: value });
          }}
          className="border border-gray-300 rounded text-black w-full px-1"
        />
      </div>
      <div
        id={comp_id}
        onClick={displayMessage}
        className="bg-violet-600 text-white py-2 px-4 rounded cursor-pointer text-center"
      >
        {`Think ${state.timer_message}`}
      </div>
    </div>
  );
};

export default ThinkWithTimer;
