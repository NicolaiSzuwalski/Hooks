// ToDoList.js
import React, { useState } from "react";
// import styles from "./ToDoList.module.scss";
import AddButton from "../addButton/AddButton.jsx";

export const Tester12 = () => {
  const [data, setData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, e.target.task.value]);
    setIsFormVisible(false); // Hide the form after submitting
  };

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div>
      <AddButton onClick={handleAddButtonClick} />
      {isFormVisible && (
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input type="text" id="task" />
            <button type="submit">Tilføj</button>
          </form>
          <div>
            <ol>
              {data &&
                data.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

