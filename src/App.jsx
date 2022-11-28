import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import TodoCard from "./components/TodoCard";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      body: body,
      isDone: false,
    };
    if (title && body !== "") {
      setTodos([...todos, newTodo]);
      setTitle("");
      setBody("");
    }
  };
  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  const doneTodoHandler = (props) => {
    // 맵으로 상태 변경한 요소 포함 새로운 배열 반환
    setTodos(
      todos.map((todo) =>
        todo.id === props.id
          ? {
              // isDone 값 변경 => 완료, 취소 표시
              id: todo.id,
              title: todo.title,
              body: todo.body,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  return (
    <div className="layout">
      <div
        style={{ backgroundColor: "#0e1116", color: "white" }}
        className="titleDiv"
      >
        <div>My Todo List</div> <div>React</div>
      </div>
      <div className="ipuntDiv">
        <div className="inputGroup">
          <label className="form-label">{"제목"}</label>
          <input
            className="add-input"
            value={title}
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="form-label">{"내용"}</label>
          <input
            className="add-input"
            value={body}
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <CustomButton color="teal" txt="추가하기" onClick={addTodoHandler}>
          추가하기
        </CustomButton>
      </div>
      <h2 className="working-list-title">Working..🔥</h2>
      <div className="todo-list working-list">
        {todos.map((todo) => {
          return todo.isDone ? null : (
            <TodoCard
              handleDone={doneTodoHandler}
              handleDelete={deleteTodoHandler}
              todo={todo}
              key={todo.id}
            ></TodoCard>
          );
        })}
      </div>
      <h2 className="done-list-title">Done..!🎉</h2>
      <div className="todo-list done-list">
        {todos.map((todo) => {
          return todo.isDone ? (
            <TodoCard
              handleDone={doneTodoHandler}
              handleDelete={deleteTodoHandler}
              todo={todo}
              key={todo.id}
            ></TodoCard>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default App;
