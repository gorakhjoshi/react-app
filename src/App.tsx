import { useSelector } from "react-redux";
import DisplayTodos from "./components/display-todos";

function App() {
  const todos = useSelector((state: any) => state.todos);
  return todos.map((item: any) => <DisplayTodos item={item} key={item.id} />);
}

export default App;
