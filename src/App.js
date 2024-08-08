import React from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import { cloneDeep } from "lodash";
import { updateList } from "./redux/slice/listSlice";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import "./global.css";

const App = () => {
  const dispatch = useDispatch();
  const complist = useSelector((state) => state.list);
  const events = useSelector((state) => state.events);

  const onDragEnd = (result) => {
    const element = result.draggableId.split("-")[0];

    // all lists in mid area
    const old_list = cloneDeep(complist.midAreaLists);

    if (!result.source) {
      return;
    }

    if (result.source.droppableId.split("-")[0] === "midAreaList") {
      // finding the source index of list
      const source_index = old_list.findIndex(
        (x) => x.id === result.source.droppableId,
      );

      if (source_index > -1) {
        const comp_list = [...old_list[source_index].comps]; // inside the list
        comp_list.splice(result.source.index, 1);
        old_list[source_index] = {
          ...old_list[source_index],
          comps: comp_list,
        };
      } else {
        return;
      }
    }

    if (
      !result.destination ||
      result.destination.droppableId === "sideArea-motion"
    ) {
      dispatch(updateList(old_list));
      return;
    } else {
      // Finding the destination index in the list
      const dest_index = old_list.findIndex(
        (x) => x.id === result.destination?.droppableId,
      );

      if (dest_index > -1) {
        const dest_comp_list = [...old_list[dest_index].comps]; // Create a copy of the comps array
        dest_comp_list.splice(result.destination.index, 0, `${element}`);

        old_list[dest_index] = {
          ...old_list[dest_index],
          comps: dest_comp_list,
        };
      } else {
        return;
      }
    }

    dispatch(updateList(old_list));
  };

  return (
    <div className="font-sans bg-violet-300 w-full h-full flex flex-col md:px-0">
      <div className="flex md:flex-row flex-col-reverse h-full">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-auto flex flex-col md:flex-row bg-white border-t border-r border-gray-200 rounded-md mr-0 md:mr-2">
            <Sidebar />
            <MidArea area_list={complist} event_values={events} />
          </div>
          <div className="w-full md:w-1/3 relative h-screen overflow-auto flex flex-col bg-white border-t border-l border-gray-200 rounded-md ml-0 md:ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
