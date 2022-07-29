
import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todo from "../models/todo";
import Row from "./row";


const TodoList: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="w-full flex items-center justify-center  " dir='ltr'>

      <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-gray-700">Todo List</h1>
          <AddTodo add={setTodos}/>
        </div>
        <div className='max-h-[300px] overflow-auto'>
          <Row />
        </div>
      </div>
    </div>
  )

}

export default TodoList;