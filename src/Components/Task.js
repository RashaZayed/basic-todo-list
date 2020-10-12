import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Task = (props) => {
  const { task, index, list, setList } = props;
  const onClick = () => {
    return setList(() => list.filter((task) => list.indexOf(task) != index));
  };
  const onChange = () => {
    // return
    list[index].isCompleted = !list[index].isCompleted;
    console.log(list);
    setList([...list]);
    console.log(list);
  };

  return (
    <div className={styles.display}>
      {task.isCompleted ? (
        <h4 className={styles.taskCompleted}>{task.name}</h4>
      ) : (
        <h4 className={styles.notCompleted}>{task.name}</h4>
      )}

      <label htmlFor="checkbox">Completed?</label>
      <input
        type="checkbox"
        checked={list.isCompleted}
        onChange={onChange}
        name=""
      />
      <Button onClick={onClick}>X</Button>
    </div>
  );
};
export default Task;
