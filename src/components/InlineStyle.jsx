export const InlineStyles = () => {
  // css の当て方
  const containerStyle = {
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "solid 2px #ccc",
    borderRadius: "50px" // JS内での記述の為、「キャメルケース」にする × border-radius
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8",
    fontWeight: "bold"
  };
  const buttonStyle = {
    padding: "8px",
    backgroundColor: "#abedd8",
    border: "none",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
