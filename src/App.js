import "./App.css";
import { GeneralStructure } from "./components/GeneralStructure";
import { AuthenticationForm } from "./components/AuthenticationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <GeneralStructure />
            </div>
          }
        />
        <Route path="/authenticate" element={<AuthenticationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
