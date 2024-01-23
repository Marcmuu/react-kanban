import "./App.css";
import { Kanban } from "./components/kanban/Kanban";

function App() {
  return (
    <div style={{ padding: "50px" }} className="contenedor">
      <h1 style={{ marginButton: "20px", textAlign: "center" }}>Kanban UI</h1>
      <Kanban />
    </div>
  );
}

export default App;
