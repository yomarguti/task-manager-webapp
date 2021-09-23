const ActionButtons = ({ onConfirm, onCancel }) => {
  return (
    <div className="flex flex-row pt-5 justify-evenly">
      <button onClick={onConfirm} className="btn btn-green">
        Confirm
      </button>
      <button onClick={onCancel} className="btn btn-red">
        Cancel
      </button>
    </div>
  );
};

export default ActionButtons;
