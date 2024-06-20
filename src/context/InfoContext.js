import { createContext, useContext, useState } from "react"

const initialInfo = {
    budget: 2000,
    remain: 2000,
    spent: 0,
    tasks: []
}

const InfoContext = createContext(initialInfo);

export const InfoProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);
    let remain = 2000;
    let spent = 0;
    function addTask(task){
        remain = remain - task.price;
        spent = spent + task.price;
        setTask((prev)=>[...prev, task]);
    }
    function removeTask(task){
        remain = remain + task.price;
        spent = spent - task.price;
        const newTasks = tasks.filter((item)=>item.id!==task.id);
        setTask([...newTasks]);
    }
    const value = {
        budget: 2000,
        remain: remain,
        spent: spent,
        taskList: tasks,
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