
import React, { useState } from "react";
import Todo from "../models/todo";

interface Props {
    add: React.Dispatch<React.SetStateAction<Todo[]>>,
}


const AddTodo: React.FC<Props> = ({add}) => {

    const [input, setInput] = useState<string>("");

    const inputHandler = (event: any) => { setInput(event.target.value) }

    return (
        <div className="flex mt-4">
            <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
                value={input} onChange={inputHandler} />
            <button
                className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">
                Add
            </button>
        </div>
    )

}

export default AddTodo;