import React, { useState } from "react";
import RedoIcon from "@mui/icons-material/Redo"; // Make sure this icon is available
import { useDispatch, useSelector } from "react-redux";
import { setCharacterAngle } from "../../redux/slice/characterSlice";

const TurnClockWise = ({ comp_id }) => {
  const [angle, setAngle] = useState(0);
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);

  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active,
    );
    if (character_angle && el) {
      el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
      dispatch(setCharacterAngle(character_angle.angle + angle));
    }
  };

  return (
    <div className="p-4 my-1 bg-violet-800 text-white rounded shadow-md text-sm">
      <div className="text-center">
        <div className="grid grid-cols-2 items-center gap-4 mb-4">
          <div>Rotate By:</div>
          <input
            type="number"
            value={angle}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              setAngle(isNaN(value) ? 0 : value);
            }}
            className="text-center mx-2 border rounded text-black w-16"
          />
        </div>
        <div
          id={comp_id}
          className="flex items-center justify-center bg-violet-700 px-4 py-2 mt-4 text-sm cursor-pointer rounded"
          onClick={handleClick}
        >
          <RedoIcon className="mr-2" />
          Turn {angle} degrees
        </div>
      </div>
    </div>
  );
};

export default TurnClockWise;
