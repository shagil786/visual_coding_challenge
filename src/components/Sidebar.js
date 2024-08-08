import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { MainComponent } from "./MainComponent";
import { motions, looks } from "../constants/sidebar-contants";
import { useAppSelector } from "../redux/store";

const Sidebar = () => {
  const app = useAppSelector((state) => state.app);

  /**
   * Renders a list of components with drag and drop functionality.
   *
   * @param components - An array of component names to render.
   * @param droppableId - The id of the droppable area for the components.
   * @returns The JSX element representing the list of components with drag and drop support.
   */
  const renderComponents = (components, droppableId) => (
    <Droppable droppableId={droppableId} type="COMPONENTS">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="mt-3 mb-3 w-full"
        >
          {components.map((x, i) => (
            <Draggable
              key={`${x}-${droppableId}`}
              draggableId={`${x}-${droppableId}`}
              index={i}
            >
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="mt-2 mb-2 w-full truncate"
                >
                  {MainComponent(x, String(app.appId))}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );

  return (
    <div className="w-full md:w-60 h-full overflow-y-auto overflow-x-hidden flex flex-col p-2 border-r border-gray-300">
      <div className="font-bold mb-5 text-center border-2 border-gray-300 rounded bg-violet-600 text-white p-2 w-full">
        Tasks
      </div>

      <div className="bg-violet-500 rounded p-2 mb-2">
        <div className="font-bold text-white text-center">Motion</div>
        {renderComponents(motions, "sideArea-motion")}
      </div>

      <div className="bg-violet-500 rounded p-2">
        <div className="font-bold text-white text-center">Looks</div>
        {renderComponents(looks, "sideArea-looks")}
      </div>
    </div>
  );
};

export default Sidebar;
