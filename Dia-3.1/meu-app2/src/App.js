import Head from "./components/Head";
import Foot from "./components/Foot";
import "./App.css";
import Showhidden from "./components/Showhidden";

function App() {
  return (
    <div className="wrapper-app">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Magra&display=swap');
      </style>
      <header className="wrapper-header">
        <Head />
      </header>

      <Showhidden />

      <footer className="wrapper-footer">
        <Foot />
      </footer>
    </div>
  );
}

export default App;
