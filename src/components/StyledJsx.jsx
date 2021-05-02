export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>

      {/* コンポーネント内にstyleタグを作成 */}
      <style jsx="true">{`
        .container {
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: solid 2px #cccccc;
          border-radius: 50px;
        }

        .title {
          margin: 0;
          color: #3d84a8;
          font-weight: bold;
        }

        .button {
          padding: 8px;
          background-color: #abedd8;
          border: none;
          border-radius: 8px;
          transition: all 0.3s;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
