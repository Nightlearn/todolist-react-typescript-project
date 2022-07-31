
import { Dispatch, SetStateAction, useState } from "react";
import Loading from "../../loading";
import Todo from "../../models/todo";

interface Props {
    item: Todo,
    seteditItem: Dispatch<SetStateAction<boolean>>,
    edit: (data:Todo, id: number)=> void,
}

const Row: React.FC<Props> = ({ seteditItem,item,edit }) => {

    const [input, setInput] = useState<string>(item.text);
    const [loading, setLoading] = useState<boolean>(false);
    const inputHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => { setInput(event.target.value) };
    
    const editTextHandler = async (id:number,input:string) => {
        setLoading(true);
        try {
            let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos/${id}`, {
                method: "PUT",
                body: JSON.stringify({ text: input }),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            });
            const todo = await res.json();
            edit(todo.data,item.id);
            seteditItem(false);

        } catch (error) { console.log(error) }
        setLoading(false);
    }


    return (
        <>
            <input className="shadow border rounded w-full py-2 p-2 mr-4 text-gray-700" placeholder="Add Todo" value={input}
                onChange={inputHandler}
            />
            <button onClick={editTextHandler.bind(null, item.id,input)}
                className={`p-2 rounded ${ loading ? "min-w-[150px]" : "min-w-[110px]"} text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1`}
            >
                <div className='flex'>
                    <div className="mx-1">{loading ? <Loading /> : ""}</div>
                    <div>ثبت ویرایش</div>
                </div>
            </button>
        </>
    )

}

export default Row;