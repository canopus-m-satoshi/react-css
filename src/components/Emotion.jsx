//  下２行のコメントアウトはemotionを使用するためのルール(一行目はバージョンによっては不要)

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // 方法１：cssをインポートし、変数を定義・cssを当てていく
  const containerStyle = css`
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid 2px #cccccc;
    border-radius: 50px;
  `;

  // 方法２：Inline StyleのようにCSSを当てる
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8",
    fontWeight: "bold"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

// 方法３："@emotion/styled"をインポートしてきてStyled ComponentのようにCSSを当てる
const SButton = styled.button`
  padding: 8px;
  background-color: #abedd8;
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
