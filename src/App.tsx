import './App.css'
import {TodoItems} from "./components/TodoItems.tsx";
import {AddTodo} from "./components/AddTodo.tsx";
import {useState} from "react";

type TodoItemProps = {
    id: number
    title: string
    isDone: boolean
}
const data: TodoItemProps[] = [
    {id: 1, title: "Html", isDone: true},
    {id: 2, title: "Css", isDone: true},
    {id: 3, title: "REactr", isDone: false},
    {id: 4, title: "Node", isDone: false},
]

function App() {
    const [items, setItems] = useState<TodoItemProps[]>(data)
    const [filter, setFilter]=useState<"all"|"active"|"completed">('all')

    let filteredTasks :Array<TodoItemProps>=[]
        if(filter === "all") {
            filteredTasks = items
        }
        if(filter === "active") {
            filteredTasks = items.filter(item => !item.isDone)
        }
        if(filter === "completed"){
            filteredTasks = items.filter(item => item.isDone)
        }


    const handleAddTask = (item: string) => {
        const newItems = {id: 5, title: item, isDone: true}
        const createTask = [newItems, ...items]
        setItems(createTask)
    }
    const handleRemoveTask = (id: number) => {
        const newArr = items.filter(item => item.id !== id)
        setItems(newArr)
    }
    const handleUpdateTask = ( id:number) => {
        const newArr = items.map(item =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        );
        setItems(newArr);
    }
    return (
        <>
            <AddTodo add={handleAddTask}/>
            <TodoItems remove={handleRemoveTask} update={handleUpdateTask} data={filteredTasks}/>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </>
    )
}

export default App
