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
          className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="InputDescription"
          placeholder="Describe your Task"
        />
        <button className="self-end px-4 py-1 mt-3 font-bold text-white bg-green-600 rounded-lg hover:cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTask;
