
import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todo from "../models/todo";
import Row from "./row";

import { useEffect } from 'react';

const TodoList: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const getUsers = async () => {

    try {
      // Fetch data from external API
      const res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`)
      const list = await res.json();

      setTodos(list.data);
    } catch (error) { console.log(error) }

  }

  useEffect(() => { getUsers() }, [])


  return (
    <div className="w-full flex items-center justify-center  " dir='ltr'>

      <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-gray-700">Todo List</h1>
          <AddTodo add={setTodos} />
        </div>
        <div className='max-h-[300px] overflow-auto'>
          {todos.map(item => (<Row key={item.id} item={item} />))}
        </div>
      </div>
    </div>
  )

}

export default TodoList;