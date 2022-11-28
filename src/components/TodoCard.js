import CustomButton from "./CustomButton";

const TodoCard = (props) => {
  return (
    <div className="todo-card" key={props.todo.id}>
      <h3>{props.todo.title}</h3>
      <div>{props.todo.body}</div>
      <div className="btn-set">
        <CustomButton
          color="#d64553"
          txt="삭제하기"
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="green"
          txt={props.todo.isDone === true ? "취소" : "완료"}
          onClick={() => {
            props.handleDone(props.todo);
          }}
        >
          {props.todo.isDone === true ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
};

export default TodoCard;
