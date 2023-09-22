import React from "react";
import { useState, useEffect } from "react";
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
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('letsRock'));
        if (list && list.length >= 0) {
            setTaskList(list)
        }
    }, [])


    const saveListToLocalStorage = (tasks) => {
        localStorage.setItem('letsRock', JSON.stringify(tasks))
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

    const removeTaskFromList = (id) => {
        let index ;
        taskList.forEach((task , i)=> {
            if(task.id===id){
                index = i
            }
        })

        const tempArray = taskList;
        tempArray.splice(index, 1);

        setTaskList([...tempArray])

        saveListToLocalStorage(tempArray);
    }


    const setTaskEditable = (id) =>{
        setIsEdit(true);
        console.log(id)

    }

    return (
        <>
            <div className="container">
                <h1 className="app-title">Let'sRock 📃</h1>

                <div className="todo-flex-container">
                    <div >
                        <h2 className="text-center">show Task</h2>
                        {
                            taskList.map((taskItem, index) => {
                                const { id, title, discription, priority } = taskItem;

                                return <Task id={id}
                                    title={title}
                                    discription={discription}
                                    priority={priority}
                                    key={index}
                                    removeTaskFromList={removeTaskFromList}
                                    setTaskEditable = {setTaskEditable}
                                />
                            })
                        }
                    </div>
                    <div>
                        <h2 className="text-center">
                            {isEdit ? "Update Task" : "Add Task"}
                        </h2>
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


                                <div className="but-container">
                                    {
                                        isEdit ?
                                            <button className="btn-add-task"
                                                type="button"
                                                onClick={addTaskToList}
                                            >
                                                Update
                                            </button>
                                            :
                                            <button className="btn-add-task"
                                                type="button"
                                                onClick={addTaskToList}
                                            >
                                                Add
                                            </button>
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home