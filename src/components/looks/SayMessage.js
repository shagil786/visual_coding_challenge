import React, { useState } from "react";
import { useSelector } from "react-redux";

const SayMessage = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const app = useSelector((state) => state.app);
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true, character_id: character.active });
    if (el) {
      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = state.message;
    }
    if (el2) el2.style.display = "none";

    window.clearTimeout(app.appId);
  };

  return (
    <div className="bg-violet-800 text-white p-4 rounded-lg text-sm mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-2 items-center gap-4">
        <div>Message:</div>
        <input
          type="text"
          value={state.message}
          onChange={(e) => {
            setState({ ...state, message: e.target.value });
          }}
          className="border border-gray-300 rounded text-black w-full px-1"
        />
      </div>
      <div
        id={comp_id}
        onClick={displayMessage}
        className="bg-violet-700 text-white text-center py-2 px-4 cursor-pointer rounded"
      >
        {`Say ${state.message}`}
      </div>
    </div>
  );
};

export default SayMessage;
