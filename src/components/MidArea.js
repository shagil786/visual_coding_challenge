import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { addList } from "../redux/slice/listSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { MainComponent } from "./MainComponent";
import { useAppDispatch } from "../redux/store";

const MidArea = ({ area_list, event_values }) => {
  const dispatch = useAppDispatch();

  /**
   * Triggers a specified event on a given HTML element.
   *
   * @param el - The HTML element on which the event will be triggered.
   * @param etype - The type of event to trigger.
   */
  const eventFire = (el, etype) => {
    if (el) {
      const evObj = new Event(etype, { bubbles: true, cancelable: true });
      el.dispatchEvent(evObj);
    }
  };

  /**
   * Handles a sequence of events based on the provided array of strings and an ID.
   * @param arr - An array of strings representing the sequence of events.
   * @param id - A string identifier for the events.
   */
  const handleClick = (arr, id) => {
    if (arr.length === 0) return;

    let i = 0;
    let repeat = 1;

    const handleWait = (str) => {
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();
      while ((curr_time - last_time) / 1000 < event_values.wait[str] - 2) {
        curr_time = new Date().getTime();
      }
    };

    const handleRepeat = (str) => {
      repeat = repeat * (event_values.repeat[str] + 1);
    };

    const handleClickEvent = (str) => {
      eventFire(document.getElementById(str), "click");
    };

    const processElement = () => {
      const currentElement = arr[i];
      let str = `comp${currentElement}-${id}-${i}`;

      if (currentElement === "WAIT") {
        handleWait(str);
      } else if (currentElement === "REPEAT") {
        handleRepeat(str);
      } else {
        handleClickEvent(str);
      }

      i++;
    };

    const interval = setInterval(() => {
      if (i === arr.length) {
        clearInterval(interval);
      } else {
        processElement();
      }
    }, 500);
  };

  return (
    <div className="flex-1 h-full p-2 max-w-full overflow-auto">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="font-bold text-center border-2 rounded text-white bg-violet-600 p-2 w-full">
          Task List Executor
        </div>

        <div className="flex-grow m-2">
          <button
            className="bg-violet-500 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={() => dispatch(addList())}
          >
            <AddIcon className="mr-2" />
            Add List
          </button>
        </div>
      </div>

      <div className="grid grid-flow-row m-2 gap-3 gap-y-5">
        {area_list.midAreaLists.map((l) => (
          <div className="w-full" key={l.id}>
            <div className="p-4 bg-white border-2 border-gray-300 rounded shadow-md">
              <div className="w-full border-2 border-gray-300 p-2 bg-violet-200 rounded">
                <Droppable droppableId={l.id} type="COMPONENTS">
                  {(provided) => (
                    <ul
                      className={`w-full h-full flex-wrap`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <div className="text-center mx-auto my-2 mb-4">
                        <button
                          className="bg-violet-700 text-white font-bold py-2 px-4 rounded flex items-center"
                          onClick={() => handleClick(l.comps, l.id)}
                        >
                          <PlayArrowIcon className="mr-2" />
                          Run
                        </button>
                      </div>

                      {l.comps &&
                        l.comps.map((x, i) => {
                          let str = `${x}`;
                          let component_id = `comp${str}-${l.id}-${i}`;

                          return (
                            <Draggable
                              key={`${str}-${l.id}-${i}`}
                              draggableId={`${str}-${l.id}-${i}`}
                              index={i}
                            >
                              {(provided) => (
                                <li
                                  className="break-words"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {MainComponent(str, component_id)}
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidArea;
