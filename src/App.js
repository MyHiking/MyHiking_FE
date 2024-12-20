import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//컴포넌트 import
import MainPage from "./components/MainPage/MainPage";
import Community from "./components/Community/Community";
import DashBoard from "./components/DashBoard/DashBoard";
import MyPage from "./components/MyPage/MyPage";
import Header from "./components/Layout/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import SignPage from "./components/SignPage/SignPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/com" element={<Community />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/my" element={<MyPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign" element={<SignPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
