import React from "react";
import "./Task.css"

const Task =({id, title, discription, priority , removeTaskFromList,obj}) =>{
    return(
        <div className="task-container">
            <h1 className="task-title">{title}</h1>
            <p className="task-discription">{discription}</p>
            <span className="task-priority">🎯 {priority} </span>
            <span className="task-delet-icon"
            onClick={()=>{
                removeTaskFromList(obj);
            }}
            >
            🗑️
            </span>
        </div>
    )
} 
export default Task