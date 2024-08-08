import React from "react";
import { useSelector } from "react-redux";

// Define the component props
const HideMessage = ({ comp_id }) => {
  const character = useSelector((state) => state.character);
  const appState = useSelector((state) => state.app);

  // Function to handle hiding message
  const displayMessage = () => {
    window.clearTimeout(appState.appId);
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (el) el.style.display = "none";
    if (el2) el.style.display = "none";
  };

  return (
    <div
      id={comp_id}
      onClick={displayMessage}
      className="bg-violet-800 text-white rounded-lg text-center py-2 px-4 cursor-pointer text-sm"
    >
      Hide Message
    </div>
  );
};

export default HideMessage;
