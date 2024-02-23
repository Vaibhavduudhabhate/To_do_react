import React, { useEffect, useState } from "react";
// import "./Todo.css";

export default function Savetaskright() {

    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem('tasks2')) || [];
        setTasks2(storedTasks)
    },[]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const [currentDay] = useState(days[currentDate.getDay()]);
  const [taskInputVisible2, setTaskInputVisible2] = useState(false);

  const showTaskInput2 = () => {
    setTaskInputVisible2(true);
  };

  const [tasks2, setTasks2] = useState(
    JSON.parse(localStorage.getItem("tasks2")) || []
  );
  const [taskInputValue2, setTaskInputValue2] = useState("");
  const handleSaveTaskClick2 = () => {
    const task2 = taskInputValue2.trim();
    if (task2 !== "") {
      saveTask(task2);
      setTasks2([...tasks2, { task2: task2, completed: false }]);
      setTaskInputValue2("");
      setTaskInputVisible2(false);
    }
  };

  const saveTask = (task2) => {
    const updatedTasks = [...tasks2, { task2: task2, completed: false }];
    localStorage.setItem("tasks2", JSON.stringify(updatedTasks));
  };

  const handleInputChange2 = (event) => {
    setTaskInputValue2(event.target.value);
  };

  const handleCheckboxChange2 = (index) => {
    const updatedTasks = [...tasks2];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks2(updatedTasks);
    localStorage.setItem('tasks2', JSON.stringify(updatedTasks));
  };

  const totalTasks2 = tasks2.length;
  const completedTasks2 = tasks2.filter(task2 => task2.completed).length;


  return (
    <div>
      <div className="right_container">
        <div className="h1_content">
          <h1>Work Tasks</h1>
        </div>
        <div className="p_content">
          <h4>
            <span className="dayOfWeek1" id="dayOfWeek">
              {currentDay}
            </span>
          </h4>
        </div>
        <div className="task_wrapper">
          <div id="taskInputWrapper2">
            {taskInputVisible2 && (
              <>
                <input
                  type="text"
                  className="taskInput"
                  id="taskInput2"
                  placeholder="Enter task"
                  onChange={handleInputChange2}
                />
                <button
                  className="saveTaskBtn"
                  id="saveTaskBtn2"
                  onClick={handleSaveTaskClick2}
                >
                  Save
                </button>
              </>
            )}
          </div>
          <div className="taskList" id="taskList2">
            {tasks2.map((tasks2,index)=>
                (<div key={index}>
                    <input type="checkbox" id="task" className="check" checked={tasks2.completed} onChange={() => handleCheckboxChange2(index)} />
                    <span>{tasks2.task2}</span>
                </div>)
            )}
          </div>
        </div>
        <div className="taskCount" id="taskCount2">{completedTasks2}/{totalTasks2}</div>
        <button className="addTaskBtn" id="addTaskBtn2" onClick={showTaskInput2}>
          Add New Task
        </button>
      </div>
    </div>
  );
}
