import CatSprite from "./CatSprite";
import React from "react";
import { useAppSelector } from "../redux/store";

const PreviewArea = () => {
  const character = useAppSelector((state) => state.character);
  let elmnt = null;
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  /**
   * Function to handle mouse down event for dragging an element.
   *
   * @param e - The mouse event triggering the function.
   * @param id - The id of the element to be dragged.
   */
  const dragMouseDown = (e, id) => {
    elmnt = document.getElementById(id);
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  /**
   * Function to handle the dragging of an element based on mouse events.
   * @param e The mouse event triggering the drag action.
   */
  const elementDrag = (e) => {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    if (elmnt) {
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  };

  /**
   * Function to clear event listeners for mouseup and mousemove events.
   */
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <div className="w-full flex flex-col h-full p-2" id="preview_area">
      <div className="font-bold mb-5 text-center border-2 rounded text-white bg-violet-600 p-2">
        Preview Area
      </div>
      <div className="relative h-full flex justify-around">
        {character.characters.map((x, i) => (
          <div
            id={`${x.id}-${i}`}
            key={i}
            className="absolute"
            onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
          >
            <div id={`${x.id}-div`} className="relative">
              <div
                className="hidden border-2 p-2 ml-3 mb-2 whitespace-nowrap bg-white"
                id={`${x.id}-message-box`}
              ></div>
              <div
                className="hidden rounded-full border-2 w-4 h-4 ml-3 mb-2 bg-white"
                id={`${x.id}-message-box1`}
              ></div>
              <CatSprite charac_id={x.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewArea;
