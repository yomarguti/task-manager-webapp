import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import TaskList from "./TaskList";
import NewTask from "./NewTask";

import taskAPI from "../utils/TaskAPI";

const TaskManager = () => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
      return;
    }

    taskAPI
      .get("/tasks")
      .then((response) => {
        setActiveTasks(response.data);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          localStorage.removeItem("token");
          router.push("/auth");
        }
      });
  }, []);

  const handleSetCompleted = async (id) => {
    let task = {};
    const tasks = activeTasks.filter((tsk) => {
      if (tsk._id === id) task = { ...tsk };
      return tsk._id !== id;
    });

    try {
      await taskAPI.patch(`/tasks/${id}`, { completed: true });
      setCompletedTasks([...completedTasks, task]);
      setActiveTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnSetCompleted = async (id) => {
    let task = {};
    const tasks = completedTasks.filter((tsk) => {
      if (tsk._id === id) task = { ...tsk };
      return tsk._id !== id;
    });
    try {
      await taskAPI.patch(`/tasks/${id}`, { completed: false });
      setCompletedTasks(tasks);
      setActiveTasks([...activeTasks, task]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewTasks = (task) => {
    setActiveTasks([task, ...activeTasks]);
  };

  const handleDeleteCompleted = async () => {
    const ids = completedTasks.map((tsk) => tsk._id);
    if (ids.length == 0) return;

    try {
      await taskAPI.delete("/tasks", { data: { ids } });
      setCompletedTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleted = async () => {
    const ids = activeTasks.map((tsk) => tsk._id);
    if (ids.length == 0) return;

    try {
      await taskAPI.patch("/completedAll", { ids });
      setCompletedTasks([...activeTasks, ...completedTasks]);
      setActiveTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container px-4 pt-10 mx-auto">
      <NewTask addTask={handleNewTasks} />
      <div className="grid grid-cols-2 gap-x-3">
        <TaskList
          title="Active Tasks"
          actionTitle="Complete All"
          tasks={activeTasks}
          onChangeStatus={handleSetCompleted}
          onActionButton={handleCompleted}
        />
        <TaskList
          title="Completed Tasks"
          actionTitle="Delete All"
          actionType="danger"
          tasks={completedTasks}
          onChangeStatus={handleUnSetCompleted}
          onActionButton={handleDeleteCompleted}
        />
      </div>
    </main>
  );
};

export default TaskManager;
