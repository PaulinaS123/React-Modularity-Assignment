import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

import { Button } from "./components/SharedComponents";

function App() {
  return (
    <div>
      <Header />

      <h2>Normal Test Cases</h2>

      <ContentA />
      <ContentB />

      <Button label="Normal Button" />

      <h2>Edge Test Cases</h2>

      {/* Edge case: empty label */}
      <Button label="" />

      {/* Edge case: no label */}
      <Button />

      {/* Edge case: very long label */}
      <Button label="This is a very very very long button label for testing edge cases" />

      <Footer />
    </div>
  );
}

export default App;
