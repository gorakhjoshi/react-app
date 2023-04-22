import { TiTick } from "react-icons/ti";

function DisplayTodos({ item }: { item: any }) {
  return (
    <div>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        <div className="flex items-center">
          <TiTick color="green" />
          <li className="flex items-center">{item.title}</li>
        </div>
      </ul>
    </div>
  );
}

export default DisplayTodos;
