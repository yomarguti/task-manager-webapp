import TaskItem from "./TaskItem";

const TaskList = ({
  title,
  actionTitle,
  actionType,
  tasks,
  onChangeStatus,
  onActionButton,
}) => {
  const classActionName = actionType === "danger" ? "btn-red" : "btn-green";

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mx-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-sm italic text-gray-600">{`${tasks.length} tasks`}</span>
      </div>
      <ul className="min-h-[8rem] sm:min-h-[12rem] px-3 py-3 mt-3 overflow-y-auto bg-gray-100 border border-gray-300 rounded-lg shadow-inner max-h-96">
        {tasks.map((tsk) => {
          return (
            <TaskItem
              task={tsk}
              key={tsk._id}
              onChangeStatus={onChangeStatus}
            />
          );
        })}
      </ul>
      <button
        onClick={onActionButton}
        className={`self-end btn ${classActionName}`}
      >
        {actionTitle}
      </button>
    </div>
  );
};

export default TaskList;
