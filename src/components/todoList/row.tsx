
import React from "react";

const Row: React.FC = () => {

    return (
        <div className="flex mb-4 items-center">
            {/* normal part */}
            <p className={`w-full ${true ? "line-through text-green-700" : "text-gray-700"}`}>{"data.text"}</p>
            <button
                className={`flex-shrink-0 p-2 ml-4 border-2 rounded hover:text-white 
              ${true ? "text-green-700 border-green-700 hover:bg-green-700" : "text-gray-700 border-gray-700 hover:bg-gray-700"}`}
            >{true ? "Done" : "Not done"}</button>
            <button
                className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
            >
                Remove</button>
            <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
            >
                edit</button>

            {/* edit part */}
            {/* <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
              />
              <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
              >
                edited</button> */}

        </div>
    )

}

export default Row;