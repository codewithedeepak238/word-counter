import { createContext, useContext, useState } from "react"

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);
    let [remain, setRemain] = useState(2000);
    let [spent, setSpent] = useState(0);
    function addTask(task){
        setRemain((prev)=>prev-task.price);
        setSpent((prev)=>prev+task.price);
        setTask((prev)=>[...prev, task]);
    }
    function removeTask(task){
        setRemain((prev)=>prev+task.price);
        setSpent((prev)=>prev-task.price);
        const newTasks = tasks.filter((item)=>item.id!==task.id);
        setTask([...newTasks]);
    }
    const value = {
        budget: 2000,
        remain: remain,
        spent: spent,
        taskList: tasks,
        setRemain,
        setSpent,
        addTask,
        removeTask
    }

    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}

export const useInfo = () => useContext(InfoContext)