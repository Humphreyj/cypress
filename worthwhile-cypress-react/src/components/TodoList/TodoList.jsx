import React, { useState, useContext } from "react";
import { MainContext } from "../../context/Context";
import Task from "./Task";
import scss from "./todo.module.scss";
export default function TodoList() {
  const { toggleModal, taskList, setTaskList } = useContext(MainContext);

  const [newTask, setNewTask] = useState({
    id: taskList.length,
    title: "",
    complete: false,
  });

  const changeHandler = (e) => {
    setNewTask({ ...newTask, title: e.target.value });
  };
  const submitTask = (task) => {
    setTaskList([...taskList, task]);
    setNewTask({
      id: taskList.length + 1,
      title: "",
      complete: false,
    });
  };
  const deleteTask = (task) => {
    const newList = taskList.filter((item) => item.title !== task.title);
    setTaskList(newList);
  };
  const completeTask = (task) => {
    let newTaskList = [...taskList];
    newTaskList[task.id].complete = !newTaskList[task.id].complete;
    setTaskList(newTaskList);
  };

  return (
    <div data-cy="todo-list" className={scss["task-list-container"]}>
      <div className={scss["add-task"]}>
        <input
          data-cy="new-task-input"
          type="text"
          placeholder="Add task here"
          onChange={changeHandler}
          className={scss["new-task-input"]}
          value={newTask.title}
        />
        <div className={scss["add-task-buttons"]}>
          <button className="clear">clear</button>
          <button
            data-cy="add-new-task"
            className={scss["add-task-button"]}
            onClick={() => submitTask(newTask)}
          >
            submit
          </button>
        </div>
      </div>
      <section className={scss["task-list"]}>
        {taskList.map((task) => {
          return (
            <Task
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </section>
      <button
        data-cy="close-modal"
        onClick={toggleModal}
        className="close-modal"
      >
        Close
      </button>
    </div>
  );
}
