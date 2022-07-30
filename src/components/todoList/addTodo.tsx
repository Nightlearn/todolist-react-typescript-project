
import React, { useState, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import Loading from "../loading/loading";
import Todo from "../models/todo";

interface Props {
    add: Dispatch<SetStateAction<Todo[]>>,
}

const AddTodo: React.FC<Props> = ({ add }) => {

    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const inputHandler: React.ChangeEventHandler = (event: any) => { setInput(event.target.value) }
    const submitHandler: React.FormEventHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        if (input.length > 0) {
            setLoading(true)
            try {
                let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`, {
                    method: "POST",
                    body: JSON.stringify({ text: input, done: false }),
                    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
                });
                const data = await res.json();

                add((prevState: Todo[]) : Todo[] => ([...prevState, data.data]));
                toast(<div className='vazir-matn-font'>مورد نظر اضافه شد todo</div>)

            } catch (error) { console.log(error) }
            setLoading(false);
            setInput("");
        } else { alert("مقداری وارد نشده") }
    }

    return (
        <form onSubmit={submitHandler} className="flex mt-4">
            <input className="shadow border rounded w-full p-2 mr-4 text-gray-700" placeholder="Add Todo"
                value={input} onChange={inputHandler} />
            <button type="submit"
                className="p-2 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                <div className='flex'>
                    <div className="mx-1">{loading ? <Loading /> : ""}</div>
                    <div>افزودن</div>
                </div>
            </button>
        </form>
    )
}

export default AddTodo;