import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;

    // 필드 이름에 따라 상태를 업데이트
    if (name === "id") setUserId(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();   // 폼 제출 시 새로고침 방지

    // 로컬스토리지에 저장하지 말고 변수에 저장.. 고민..

    const response = await axios.post();    // axios로 로그인 로직 진행할건지??
  }

  return (
    <div>
      <h3>LoginPage</h3>

      <form onSubmit={handleSubmit}>
        <input type={"email"} name={"id"} placeholder={"email"} onChange={handleChange}/>
        <br/>
        <input type={"password"} name={"password"} placeholder={"password"} onChange={handleChange}/>
        <br/>
        <button type={"submit"}>로그인</button>
      </form>

      <button name={"kakao"}>카카오로 로그인하기</button>
    </div>
  );
};

export default LoginPage;
