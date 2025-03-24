import {ChangeEvent, useState} from "react";

type AddTodoProps = {
    add:(item:string) => void
}

export const AddTodo = ({add}:AddTodoProps) =>{
    const [newValue,setNewValue]=useState('');
    const handleNewValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.currentTarget.value);
    }
    return (
        <div>
            <input type="text" value={newValue} onChange={handleNewValueChange}  placeholder={"input Here "}/>
            <button onClick={() => add(newValue)}>+</button>
        </div>
    )
}