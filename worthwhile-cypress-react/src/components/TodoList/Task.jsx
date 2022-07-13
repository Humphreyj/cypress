import React from "react";

//styles
import scss from "./todo.module.scss";
const Task = (props) => {
  const { task, deleteTask, completeTask } = props;
  return (
    <div className={scss[task.complete ? "task-item-complete" : "task-item"]}>
      <div className={scss["task-title-container"]}>
        <h6 data-cy={`task-${task.id}`} className={scss["task-title"]}>
          {task.title}
        </h6>
        <input
          type="checkbox"
          name="complete-task"
          data-cy={`complete-task-${task.id}`}
          className="complete-task"
          checked={task.complete}
          value={task.complete}
          onClick={() => completeTask(task)}
        />
      </div>
      <div className={scss["task-item-buttons"]}>
        <button
          data-cy={`delete-task-${task.id}`}
          className="delete-task"
          onClick={() => deleteTask(task)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
