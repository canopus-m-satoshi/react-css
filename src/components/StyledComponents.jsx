// 任意で変数を設定し、"styled-components"をインポートする
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    //  [独自ルール]同コンポーネントファイル内でcssを当てていることが分かるように接頭辞「S」をつける
    <SContainer className="container">
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

// スタイルを当てたコンポーネントを作成する
// テンプレート文字列内でcssを記述していく
const SContainer = styled.div`
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid 2px #cccccc;
  border-radius: 50px;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
  font-weight: bold;
`;

const SButton = styled.button`
  padding: 8px;
  background-color: #abedd8;
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;

  // sassのように入れ子が可能
  &:hover {
    opacity: 0.8;
  }
`;
