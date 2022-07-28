import React from "react";
import AddTodo from "./addTodo";


const TodoList : React.FC = () => {

    return (
        <div className="w-full flex items-center justify-center  " dir='ltr'>

        <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-700">Todo List</h1>
            <div className="flex mt-4">
              <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
              />
              <button
                className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
          <div className='max-h-[300px] overflow-auto'>
            <div className="flex mb-4 items-center">
                <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
    

}

export default TodoList;