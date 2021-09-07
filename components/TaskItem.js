import dayjs from "dayjs";

const TaskItem = ({
  task: { _id, description, createdAt },
  onChangeStatus,
}) => {
  return (
    <li
      onClick={() => onChangeStatus(_id)}
      className="px-3 py-1 mx-2 my-2 transition transform border border-gray-400 rounded-md shadow-lg hover:scale-105"
    >
      <h4>{description}</h4>
      <p className="text-xs">{dayjs(createdAt).format("DD/MM/YYYY, HH:mm")}</p>
    </li>
  );
};

export default TaskItem;
