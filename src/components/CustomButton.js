function CustomButton(props) {
  const { color, onClick, txt } = props; // 구조분해할당
  const btnStyle = {
    backgroundColor: color,
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "140px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.6) 0px 18px 36px -18px inset",
  };
  return (
    <button className="cusTomBtnStyle" style={btnStyle} onClick={onClick}>
      {txt}
    </button>
  );
}

export default CustomButton;
