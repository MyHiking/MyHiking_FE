import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//컴포넌트 import
import MainPage from "./components/MainPage/MainPage";
function App() {
  return (
    <Router>
      <div className="App">
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
