import { useDispatch } from "react-redux";
import { changeDone, deleteTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ item }) {
  const { id, title, content, isDone } = item;
  const dispatch = useDispatch();
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>{title}</p>
        <p>{content}</p>
      </section>
      <section>
        <button
          onClick={() => {
            dispatch(changeDone({ id, title, content, isDone: !isDone }));
          }}
        >
          완료
        </button>
        <button
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        >
          삭제
        </button>
      </section>
    </li>
  );
}
