import React from "react";
import { useSelector } from "react-redux";

// Define the component props
const Hide = ({ comp_id }) => {
  const character = useSelector((state) => state.character);

  // To handle hide component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.display = "none";
    }
  };

  return (
    <div
      id={comp_id}
      onClick={handleDisplay}
      className="text-center bg-violet-800 text-white rounded-lg py-2 px-4 cursor-pointer text-sm"
    >
      Hide
    </div>
  );
};

export default Hide;
