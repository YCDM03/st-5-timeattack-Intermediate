import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { useRef } from "react";

export default function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const title = useRef();
  const content = useRef();

  return (
    <form>
      <label>제목: </label>
      <input type="text" ref={title} /> <label>내용: </label>
      <input type="text" ref={content} />
      <button
        type="button"
        onClick={() => {
          dispatch(
            addTodo({
              id: Date.now(),
              title: title.current.value,
              content: content.current.value,
              isDone: false,
            })
          );
        }}
      >
        추가
      </button>
    </form>
  );
}
