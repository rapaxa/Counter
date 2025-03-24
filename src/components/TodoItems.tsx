import * as React from "react";

type TodoItemProps = {
    id: number
    title: string
    isDone: boolean
}
type TodoItemsProps = {
    data: TodoItemProps[]
    remove: (id: number) => void
    update: (id: number) => void
}

export const TodoItems: React.FC<TodoItemsProps> = ({data, remove, update}) => {


    return (
        <>
            {data.length > 0 ?
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <input type="checkbox" onChange={() => update(item.id)} checked={item.isDone}/>
                            <button onClick={() => remove(item.id)}>X</button>
                        </li>

                    ))}

                </ul>
                :
                <span>Таксок нет</span>
            }

        </>

    )
}