import React from "react";
import "./Todo.css";
import Savetask_right from "./Savetask_right";
import Savetask_left from "./Savetask_left";

export default function Todo() {

  return (
    <div>
      <div className="container">
        <div className="second_container">
          <div className="search">
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Search..." />
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="icons">
            <div className="forward"></div>
            <div className="backward"></div>
          </div>
          <div className="tasks_container">
            <Savetask_left/>
            <Savetask_right/>
          </div>
        </div>
      </div>
    </div>
  );
}
