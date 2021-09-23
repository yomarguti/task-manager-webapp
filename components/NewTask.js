import { useState } from "react";

import taskAPI from "../utils/TaskAPI";

const NewTask = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await taskAPI.post("/tasks", {
        description,
      });
      setDescription("");
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-form"
          type="text"
          id="InputDescription"
          placeholder="Describe your Task"
        />
        <button
          disabled={description.length <= 2}
          className="self-end btn btn-green"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTask;
