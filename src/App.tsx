import { useSelector } from "react-redux";
import DisplayTodos from "./components/display-todos";
import CreateTodo from "./components/create-todo";

function App() {
  const todos = useSelector((state: any) => state.todos);
  return (
    <>
      <CreateTodo />

      <div className="p-4">
        <h2>Created Todos</h2>
        {todos.map((item: any) => (
          <DisplayTodos item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default App;
