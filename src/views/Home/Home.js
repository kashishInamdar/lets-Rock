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

    ])
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const [priority, setPriority] = useState('');

    const loadListFromeLocalStorage = () => {
        const list = localStorage.getItem('le')
    }

    const saveListToLocalStorage = (tasks) => {
        localStorage.setItem('letsRock', JSON.stringify(tasks) )
    }

    const addTaskToList = () => {
        const randomId = Math.floor(Math.random() * 1000);

        const obj = {
            id: randomId,
            title: title,
            discription: discription,
            priority: priority,
        }

        const newTaskList = [...taskList, obj]

        setTaskList(newTaskList)
        setTitle('');
        setDiscription('');
        setPriority('');

        saveListToLocalStorage(newTaskList);
    }

    const removeTaskFromList = (obj) =>{
        const index = taskList.indexOf(obj);

        const tempArray = taskList ;
        tempArray.splice(index , 1);
        setTaskList([...tempArray])
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

                                return <Task id={id}
                                    title={title}
                                    discription={discription}
                                    priority={priority}
                                    key={index} 
                                    removeTaskFromList ={removeTaskFromList}
                                    obj={taskItem}
                                 />
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

                                <button className="btn-add-task"
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