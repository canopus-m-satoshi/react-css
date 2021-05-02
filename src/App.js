import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />

      <CssModules />
    </div>
  );
}
