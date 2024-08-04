import React, { useState } from 'react'

const Todobox = () => {
  const [todos, setTodos] = useState({ todo: "" })
  const [todolist, setTodolist] = useState([])
  const [check, setCheck] = useState(false)

  const inputHandle = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value })
  }

  const saveTodo = () => {
    if (todos.todo.trim() !== "") {
      setTodolist([...todolist, { todotxt: todos.todo }])
      setTodos({ todo: "" })
    }
  }

  const checkHandle = (index) => {
    let newTodolist = [...todolist]
    newTodolist[index].checked = !newTodolist[index].checked
    setTodolist(newTodolist)
  }

  return (
    <div>
      <div className="container border-2 border-solid border-black min-h-screen w-1/2 mx-auto my-4 bg-indigo-200">
        <h2 className="text-center text-3xl my-10">Your TO-DO list manager</h2>
        <div className="inputSection">
          <input type="text" name="todo" className="border-2 border-black w-4/5 m-4 px-4 py-2" placeholder="Enter your task here" value={todos.todo || ""} onChange={inputHandle} />
          <button className="bg-indigo-500 px-4 py-1 text-white rounded-md" onClick={saveTodo}>Save</button>
        </div>
        <div className="showSection w-4/5 h-full mx-auto mt-8">
          {todolist.map((item, index) => (
            <div key={index} className="todoelements flex justify-between items-center bg-indigo-400 my-4 h-12 px-3">
              <div className="textcheck flex gap-2">
                <input type="checkbox" name="check" checked={item.checked} onChange={() => checkHandle(index)} />
                {item.checked ? (<div className="todo line-through">{item.todotxt}</div>) : (<div className="todo">{item.todotxt}</div>)}
              </div>
              <div className="todobtn flex gap-2">
                <button className="bg-indigo-500 px-4 py-1 text-white rounded-md">Edit</button>
                <button className="bg-indigo-500 px-4 py-1 text-white rounded-md">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todobox
