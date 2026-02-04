import { IconX, IconLoader2 } from "@tabler/icons-react";
import { useTodo } from "../context/TodoProvider";
import { useState } from "react";
import { addNewTodo, updateTodoById } from "../utils/todoApiRequest";

function TodoForm({ ModelClose }) {
  const { dispatch, isEdit, editTask } = useTodo();
  const [title, setTitle] = useState(editTask?.updateData?.title || "");
  const [description, setDescription] = useState(
    editTask?.updateData?.description || "",
  );
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!isEdit) {
        const todo = await addNewTodo({ title, description });
        dispatch({ type: "ADD_TODO", payload: todo.data });
      } else {
        await updateTodoById(editTask.id, { title, description });
        dispatch({
          type: "UPDATE_TODO",
          payload: { id: editTask.id, updateData: { title, description } },
        });
      }
      setTitle("");
      setDescription("");
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
      ModelClose();
    }
  };
  return (
    <>
      <div className="rounded-2xl bg-white font-manrope border border-neutral-300 shadow-sm shadow-neutral-300">
        <div className="sm:px-6 px-4 py-4 flex items-center justify-between border-b border-neutral-200">
          <h2 className="form_title">
            {!isEdit ? "Add New Task" : "Update Task"}
          </h2>
          <button className="form_close_icon" onClick={ModelClose}>
            <IconX size={20} stroke={2.5} />
          </button>
        </div>
        <form
          className="flex flex-col gap-4 sm:px-6 px-4 py-5"
          onSubmit={handleSubmit}
        >
          <div>
            <p className="input_label">Task title</p>
            <input
              type="text"
              id="title"
              placeholder="Enter task title"
              className="form_input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <p className="input_label">Content</p>
            <textarea
              rows={8}
              id="description"
              placeholder="Enter task content (optional)"
              className="form_input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end gap-3 sm:gap-4">
            <button
              type="button"
              className="btn px-6 py-2.5 border border-neutral-200 bg-neutral-100"
              onClick={ModelClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn px-6 py-2.5 bg-neutral-800 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <IconLoader2 size={20} className="animate-spin" />
              ) : !isEdit ? (
                "Add"
              ) : (
                "Update"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
