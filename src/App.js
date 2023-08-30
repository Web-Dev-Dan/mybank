import ButtonGroup from "./components/ButtonGroup";
import Display from "./components/Display";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* --- Navigation --- */}
        <Navigation />
        <main className="main">
          {/* --- Display --- */}
          <Display />
          {/* --- Buttons --- */}
          <ButtonGroup />
        </main>
      </div>
    </div>
  );
}
