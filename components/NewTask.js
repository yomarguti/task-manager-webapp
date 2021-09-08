import { useRef } from "react";

import taskAPI from "../utils/TaskAPI";

const NewTask = ({ addTask }) => {
  const descriptionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await taskAPI.post("/tasks", {
        description: descriptionRef.current.value,
      });
      descriptionRef.current.value = "";
      addTask(response.data.task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-8">
      <h4 className="text-lg font-semibold">New Task</h4>
      <form className="flex flex-col pt-2" onSubmit={handleSubmit}>
        <input
          ref={descriptionRef}
          className="input-form"
          type="text"
          id="InputDescription"
          placeholder="Describe your Task"
        />
        <button className="self-end btn btn-green">Create</button>
      </form>
    </div>
  );
};

export default NewTask;
