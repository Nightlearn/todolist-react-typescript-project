
import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todo from "../models/todo";
import Row from "./row";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from 'react';
import Filter from "./filter";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../store/todoSlice";
const TodoList: React.FC = () => {

  const todos = useSelector((state: RootState) => state.todo);
  
  const [SelectedIndex, setSelectedIndex] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const getTodos = async () => {
    try {
      // Fetch data from external API
      const res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`)
      const list = await res.json();
      dispatch(setTodos(list.data));
      
    } catch (error) { console.log(error) }

  }

  useEffect(() => { getTodos() }, []);

  const filter = (index: number, searchStr: string): Todo[] => {
    let filterTodos: Todo[] = [];
    filterTodos = todos.filter(todo => (index === 0 ? true : index === 1 ? todo.done : !todo.done));
    filterTodos = filterTodos.filter(todo => (todo.text.includes(searchStr)));
    return filterTodos;
  }

  return (
    <div>
      <Filter setSelectedIndex={setSelectedIndex} setSearch={setSearch} />
      <div className="w-full flex items-center justify-center" dir='ltr'>
        <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-700">Todo List</h1>
            <AddTodo />
          </div>
          <div className='max-h-[300px] overflow-auto shadow-inner'>
            {filter(SelectedIndex, search).map(item => (<Row key={item.id} item={item} />))}
          </div>
        </div>
      </div>
    </div>
  )

}

export default TodoList;