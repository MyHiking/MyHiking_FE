import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// 컴포넌트 import
import MainPage from "./components/MainPage/MainPage";
import Community from "./components/Community/Community";
import DashBoard from "./components/DashBoard/DashBoard";
import MyPage from "./components/MyPage/MyPage";
import Header from "./components/Layout/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import SignPage from "./components/SignPage/SignPage";

function AppContent() {
  const location = useLocation();

  // 로그인 및 회원가입 페이지에서 Header 숨기기
  const hideHeader = ["/login", "/sign"].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeader && <Header />}
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
