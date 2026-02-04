import { IconX } from "@tabler/icons-react";

function ViewMore({ ModelClose, title, description }) {
  return (
    <>
      <div className="rounded-2xl bg-white font-manrope border border-neutral-300 shadow-sm shadow-neutral-300">
        <div className="sm:px-6 px-4 pt-4 pb-2 flex items-center justify-between border-b border-neutral-200">
          <h2 className="form_title">More Details</h2>
          <button className="form_close_icon" onClick={ModelClose}>
            <IconX size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:px-6 px-4 py-5">
          <div>
            <p className="input_label">Task title</p>
            <textarea
              rows={2}
              type="text"
              id="title"
              placeholder="Enter task title"
              className="form_input scroll-close"
              value={title}
              disabled
            ></textarea>
          </div>
          <div>
            <p className="input_label">Description</p>
            <textarea
              rows={8}
              id="description"
              placeholder="Enter task content (optional)"
              className="form_input scroll-close"
              value={description}
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMore;
