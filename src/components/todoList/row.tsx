
import React from "react";
import Todo from "../models/todo";

interface Props {
    item: Todo,
}

const Row: React.FC<Props> = ({ item }) => {



    return (
        <div className="flex mb-4 items-center justify-between">
            {/* normal part */}
            <div>
                <p className={`w-full text-ellipsis whitespace-nowrap overflow-hidden max-w-[130px] ${item.done ? "line-through text-green-700" : "text-gray-700"}`}>{item.text}</p>
            </div>
            <div>
                <button
                    className={`p-2 rounded text-white text-center font-bold drop-shadow focus:ring mx-1 min-w-[90px]
              ${item.done ? "hover:bg-green-600 active:bg-green-700 focus:ring-green-300 bg-green-500" : "hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300 bg-gray-500"}`}
                >{item.done ? "Done" : "Not done"}</button>
                <button
                    className="p-2 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1"
                >Remove</button>
                <button className="p-2 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1"
                >edit</button>
            </div>

            {/* edit part */}
            {/* <input className="shadow border rounded w-full py-2 p-2 mr-4 text-gray-700" placeholder="Add Todo"
              />
              <button className="p-2 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1"
              >
                edited</button> */}
        </div>
    )

}

export default Row;