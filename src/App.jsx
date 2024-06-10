import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const input = useRef();
  const counter = useSelector((state) => {
    state.counter.value;
  });
  const dispatch = useDispatch(counter);
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input ref={input} /> 만큼을{" "}
        <button
          onClick={() => {
            dispatch(incrementByAmount(+input.current.value));
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            dispatch(decrementByAmount(+input.current.value));
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>{num}</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
