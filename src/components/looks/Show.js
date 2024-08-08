import React from "react";
import { useSelector } from "react-redux";

const Show = ({ comp_id }) => {
  const character = useSelector((state) => state.character);

  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.display = "inline-block";
    }
  };

  return (
    <div
      id={comp_id}
      onClick={handleDisplay}
      className="bg-violet-800 text-white rounded-md text-center py-2 px-4 my-2 cursor-pointer text-sm"
    >
      Show
    </div>
  );
};

export default Show;
