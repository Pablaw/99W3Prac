import CustomButton from "./CustomButton";

const TodoCard = (props) => {
  return (
    <div className="todo-card" key={props.todo.id}>
      <div
        className="todo_modalClickBtn"
        onClick={() => {
          props.handleModal(props.todo);
        }}
      >
        π
      </div>
      <h3 style={{ wordWrap: "break-word" }}>{props.todo.title}</h3>
      <div style={{ wordWrap: "break-word" }}>{props.todo.body}</div>
      <div className="btn-set">
        <CustomButton
          color="#d64553"
          txt="μ­μ νκΈ°"
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          μ­μ νκΈ°
        </CustomButton>
        <CustomButton
          color="green"
          txt={props.todo.isDone === true ? "μ·¨μ" : "μλ£"}
          onClick={() => {
            props.handleDone(props.todo);
          }}
        >
          {props.todo.isDone === true ? "μ·¨μ" : "μλ£"}
        </CustomButton>
      </div>
    </div>
  );
};

export default TodoCard;
