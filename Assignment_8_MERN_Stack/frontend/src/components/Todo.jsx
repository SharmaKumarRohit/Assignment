import { useState } from "react";
import { useTodo } from "../context/TodoProvider";
import Model from "./Model";
import Delete from "./Delete";
import {
  IconCircle,
  IconCircleCheckFilled,
  IconLoader2,
  IconEdit,
  IconTrash,
  IconDotsVertical,
  IconEye,
  IconX,
} from "@tabler/icons-react";
import { toggleTodo } from "../utils/todoApiRequest";
import { AnimatePresence } from "motion/react";
import ViewMore from "./ViewMore";

function Todo({ _id, title, description, completed }) {
  const { dispatch, EditStart, setEditTask } = useTodo();
  const [deleteModel, setDeleteModel] = useState(false);
  const ModelClose = () => setDeleteModel(false);
  const ModelOpen = () => {
    setDeleteModel(true);
    setDotMenu(null);
  };
  const [isView, setIsView] = useState(false);
  const openView = () => {
    setIsView(true);
    setDotMenu(null);
  };
  const closeView = () => setIsView(false);
  const [dotMenu, setDotMenu] = useState(null);
  const startEditingTask = () => {
    setEditTask({ id: _id, updateData: { title, description } });
    EditStart();
    setDotMenu(null);
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = async (id) => {
    setIsLoading(true);
    try {
      await toggleTodo(id);
      dispatch({ type: "TOGGLE_TODO", payload: { id } });
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {deleteModel && (
          <Model ModelClose={ModelClose} w="md">
            <Delete ModelClose={ModelClose} id={_id} />
          </Model>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isView && (
          <Model ModelClose={closeView}>
            <ViewMore
              ModelClose={closeView}
              title={title}
              description={description}
            />
          </Model>
        )}
      </AnimatePresence>

      <div className="bg-white relative border border-neutral-200 text-neutral-800 font-manrope p-4 rounded-lg flex items-center justify-between gap-3 sm:gap-4 shadow-xs">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className={completed ? "text-neutral-800" : "text-neutral-400"}
            onClick={() => handleToggle(_id)}
          >
            {isLoading ? (
              <IconLoader2 size={25} className="animate-spin" />
            ) : completed ? (
              <IconCircleCheckFilled size={25} />
            ) : (
              <IconCircle size={25} />
            )}
          </button>
          <div>
            <h3
              className={`text-lg font-bold break-all line-clamp-1 ${completed && "line-through"}`}
            >
              {title}
            </h3>
            {description && (
              <p
                className={`text-sm font-medium break-all text-neutral-500 line-clamp-2 ${completed && "line-through"}`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        <button
          className="bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 transition-colors rounded-full p-0.5 text-neutral-800 cursor-pointer"
          onClick={() => (dotMenu ? setDotMenu(null) : setDotMenu(_id))}
        >
          {dotMenu ? <IconX size={18} /> : <IconDotsVertical size={18} />}
        </button>
        {dotMenu === _id && (
          <div className="bg-white border border-neutral-200 absolute -bottom-3 z-10 translate-y-1/2 right-3 rounded-lg shadow-md divide-y divide-neutral-200">
            <button
              className="hover:bg-neutral-100 transition-colors cursor-pointer flex items-center gap-2 w-full px-2 py-1 text-sm font-semibold"
              onClick={startEditingTask}
            >
              <IconEdit size={22} /> Edit
            </button>
            <button
              className="hover:bg-neutral-100 transition-colors cursor-pointer flex items-center gap-2 w-full px-2 py-1 text-sm font-semibold"
              onClick={ModelOpen}
            >
              <IconTrash size={22} /> Delete
            </button>
            <button
              className="hover:bg-neutral-100 transition-colors cursor-pointer flex items-center gap-2 w-full px-2 py-1 text-sm font-semibold"
              onClick={openView}
            >
              <IconEye size={22} /> View
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
