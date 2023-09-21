import React from "react";
import { useState } from "react";
import Task from "../../component/Task/Task";
import './Home.css';
const Home = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: "Submit assighnbment",
            discription: "Nahi to gali padegi",
            priority: "high"
        },
        {
            id: 2,
            title: "Preir",
            discription: "Nahi ki to Savab nahi milega",
            priority: "very high"
        },
        {
            id: 1,
            title: "Cocking",
            discription: "karni hi hogi",
            priority: "Medeum",
        },
    ])
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const [priority, setPriority] = useState('');

    const addTaskToList = () => {
        const randomId = Math.floor(Math.random() * 1000);
        const obj ={
            id : randomId,
            title : title,
            discription : discription,
            priority : priority,
        }
        setTaskList([...taskList , obj])
        setTitle('');
        setDiscription('');
        setPriority('');
    }

    return (
        <>
            <div className="container">
                <h1 className="app-title">Let'sRock 📃</h1>

                <div className="todo-flex-container">
                    <div >
                        <h2 className="text-center">show list</h2>
                        {
                            taskList.map((taskItem, index) => {
                                const { id, title, discription, priority } = taskItem;
                                return <Task id={id} title={title} discription={discription} priority={priority} />
                            })
                        }
                    </div>
                    <div>
                        <h2 className="text-center">Add list</h2>
                        <div className="add-task-form-container">
                            <form>

                                <input type="text"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                    placeholder="Enter Titel"
                                    className="task-input"
                                />
                                <input type="text"
                                    value={discription}
                                    onChange={(e) => {
                                        setDiscription(e.target.value)
                                    }}
                                    placeholder="Enter discription"
                                    className="task-input"
                                />
                                <input type="text"
                                    value={priority}
                                    onChange={(e) => {
                                        setPriority(e.target.value)
                                    }}
                                    placeholder="Enter Priority"
                                    className="task-input"
                                />

                                    <button  className="btn-add-task"
                                    type="button" 
                                    onClick={addTaskToList}
                                    >
                                        Add Task To List
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home