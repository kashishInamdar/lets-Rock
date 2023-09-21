import React from "react";
import "./Task.css"

const Task =({id, title, discription, priority}) =>{
    return(
        <div className="task-container">
            <h1 className="task-title">{title}</h1>
            <p className="task-discription">{discription}</p>
            <span className="task-priority">🎯 {priority} </span>
        </div>
    )
} 
export default Task