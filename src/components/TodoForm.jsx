import React, { useState } from "react";
import { useTodo } from "../context/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
