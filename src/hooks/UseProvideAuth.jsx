import {useState} from "react";

export default function useProvideAuth() {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('isLogin'));

  const login = token => {
    window.sessionStorage.setItem('isLogin', true);
    window.sessionStorage.setItem('token', token);
    setToken(token);
    setIsLogin(true);
  };

  const logout = () => {
    window.sessionStorage.removeItem('isLogin', false);
    window.sessionStorage.removeItem('token', token);
    setToken(null);
    setIsLogin(false);
  };

  return {
    token,
    isLogin,
    login,
    logout,
  };

}