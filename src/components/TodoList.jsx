import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ text, todos }) {
  return (
    <section>
      <h2>{text}</h2>
      <ul>
        {todos.map((item) => {
          return <TodoItem item={item} />;
        })}
      </ul>
    </section>
  );
}
