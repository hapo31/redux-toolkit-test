import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, done, RootState } from "../store/Todo";

const Todo = () => {

  const [name, setName] = useState("");
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const {todo} = useSelector((state: RootState) => ({ todo: state.todo }));

  return <>
    <p>
      <input ref={nameInputRef} placeholder="name" onChange={e => {
        setName(e.target.value);
      }} />
      <button onClick={()=>{
        dispatch(add({
          id: Math.floor(Math.random() * 100000),
          name,
          done: false
        }));
        setName("");
        if (nameInputRef.current) {
          nameInputRef.current.value = "";
        }
      }}>
        Add
      </button>
    </p>
    <p>
      {todo.todos.filter(todo => !todo.done).map((todo, index) => (
        <div key={`${todo.id}-${todo.name}`}>
          <input type="checkbox" onChange={(e) => {
            const checked = e.target.checked;
            dispatch(done({
              id: todo.id,
              done: checked
            }));
          }} checked={todo.done} /> {todo.name}
        </div>
      ))}
      <h2>completed</h2>
      {todo.todos.filter(todo => todo.done).map((todo, index) => (
        <div key={`${todo.id}-${todo.name}`}>
          <input type="checkbox" onChange={(e) => {
            const checked = e.target.checked;
            dispatch(done({
              id: todo.id,
              done: checked
            }));
          }} checked={todo.done} /> {todo.name}
        </div>
      ))}
    </p>
  </>
};

export default Todo;