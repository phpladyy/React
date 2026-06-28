import { useEffect, useState } from "react";
import "./App.css";
import supabase from "./supabase-client";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("TodoList")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      console.log("fetch error:", error);
    } else {
      setTodoList(data);
    }
  };

  const addTodo = async () => {
    const newTodoData = {
      name: newTodo,
      isCompleted: false,
    };
    const { error } = await supabase
      .from("TodoList")
      .insert([newTodoData])
      .single();
    if (error) {
      console.log("error adding:", error);
    } else {
      fetchTodos();
    }
  };

  const completeTask = async (id, isCompleted) => {
    const { error } = await supabase
      .from("TodoList")
      .update({ isCompleted: !isCompleted })
      .eq("id", id);

    if (error) {
      console.log("err toggling:", error);
    } else {
      fetchTodos();
    }
  };
  const deleteTask = async (id) => {
    const { error } = await supabase.from("TodoList").delete().eq("id", id);
    if (error) {
      console.log("err deleting:", error);
    } else {
      fetchTodos();
    }
  };

  return (
    <div>
      <h1>todo list</h1>
      <div>
        <input
          type="text"
          placeholder="todo.."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add to list</button>
      </div>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item?.name}
            <button onClick={() => completeTask(item.id, item.isCompleted)}>
              {item.isCompleted ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(item.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
