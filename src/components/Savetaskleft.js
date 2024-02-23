import React, { useEffect, useState } from "react";

export default function Savetaskleft() {

  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks)
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

  const [taskInputVisible, setTaskInputVisible] = useState(false);

  const showTaskInput = () => {
    setTaskInputVisible(true);
  };

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskInputValue, setTaskInputValue] = useState('');
  const handleSaveTaskClick = () => {
    const task = taskInputValue.trim();
    if (task !== '') {
      saveTask(task);
      setTasks([...tasks, { task: task, completed: false }]);
      setTaskInputValue('');
      setTaskInputVisible(false);
    }
  };

  const saveTask = (task) => {
    const updatedTasks = [...tasks, { task: task, completed: false }];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;


  return (
    <div>
      <div className="left_container">
        <div className="h1_content">
          <h1>Life Tasks</h1>
        </div>
        <div className="p_content">
          <h4>
            <span className="dayOfWeek" id="dayOfWeek">
              {currentDay}
            </span>
          </h4>
        </div>

        <div className="task_wrapper">
          <div id="taskInputWrapper">
            {taskInputVisible && (
              <>
                <input
                  type="text"
                  className="taskInput"
                  id="taskInput"
                  placeholder="Enter task"
                  onChange={handleInputChange}
                />
                <button className="saveTaskBtn" id="saveTaskBtn" onClick={handleSaveTaskClick}>
                  Save
                </button>
              </>
            )}
          </div>
          <div className="taskList" id="taskList">
          {tasks.map((tasks,index)=>
                (<div key={index}>
                    <input type="checkbox" id="task" className="check" checked={tasks.completed} onChange={() => handleCheckboxChange(index)} />
                    <span>{tasks.task}</span>
                </div>)
            )}

          </div>
        </div>

        <div className="taskCount" id="taskCount">{completedTasks}/{totalTasks}</div>
        <button className="addTaskBtn" id="addTaskBtn" onClick={showTaskInput}>
          Add New Task
        </button>
      </div>
    </div>
  );
}
