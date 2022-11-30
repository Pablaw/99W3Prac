const Modal = ({ modal, setModal }) => {
  return (
    <div className="todoModal">
      <div className="modalContent">
        <div
          className="modal_cancle_btn"
          onClick={() => {
            setModal((modal.clicked = false));
          }}
        >
          X
        </div>
        <h3 style={{ fontSize: "1.3em" }}>{modal.title}</h3>
        <div style={{ fontSize: "1.1em" }}>{modal.body}</div>
      </div>
    </div>
  );
};

export default Modal;
