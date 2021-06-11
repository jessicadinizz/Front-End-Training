import Head from "./components/Header";
import Foot from "./components/Footer";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="wapper-app">
      <Head />

      <ToDo />

      <Foot />
    </div>
  );
}

export default App;
