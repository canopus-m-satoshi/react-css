import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <br />
      <hr />
      <br />
      <CssModules />
      <br />
      <hr />
      <br />
      <StyledJsx />
      <br />
      <hr />
      <br />
      <StyledComponents />
      <br />
      <hr />
      <br />
    </div>
  );
}
