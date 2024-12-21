import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import axios from "axios";
import {useAuth} from "../../hooks/UseAuth";

const LoginPage = () => {
  const auth = useAuth(); // 토큰 관련 인증
  const [userEmail, setUserEmail] = useState(""); // 입력된 이메일
  const [password, setPassword] = useState(""); // 입력된 비밀번호
  const navigate = useNavigate(); // 페이지 이동

  // 로그인 정보 변수에 저장 -> 입력값 바뀔 때마다
  const handleChange = (event) => {
    const {name, value} = event.target;

    // 필드 이름에 따라 상태를 업데이트
    if (name === "email") setUserEmail(value);
    if (name === "password") setPassword(value);
  };

  // 로그인 시도
  const handleSubmit = async (event) => {
    event.preventDefault();   // 폼 제출 시 새로고침 방지

    const testEmail = "hgd@gmail.com"; // 테스트용 이메일
    const testPassword = "1234"; // 테스트용 비밀번호
    const testToken = "123456";  // 테스트용 토큰

    // 백에 보낼 데이터(입력받은)
    // const data = {
    //   email: userEmail,
    //   password: password,
    // };

    try {
      // const response = await axios.post("http://localhost:8000/login", data);    // axios로 로그인 로직 진행할건지??

      if(userEmail === testEmail || password === testPassword){
        auth.login(testToken);
        alert("로그인 성공");
        navigate("/");
      }
      // auth.login(response.data.token);    // 로그인 성공 시 토큰 변수로 저장
    } catch(error) {
      alert("입력한 정보를 확인하거나 회원가입 진행 후 로그인 해주세요.");   // 에러 발생 시 안내문구 출력
      console.error('Error sending data: ', error);   // 콘솔에 에러 정보 출력
    }
  };

  // 취소 버튼 누를 경우
  const handleCancel = () => {
    if(window.history.length > 2) {   // 이전 페이지 존재할 경우 navigate로 이전페이지 이동
      navigate(-1);
    } else{
      navigate("/");    //  이전 페이지 없을 경우 (url로 접속하는 등) 바로 메인 페이지로 이동
    }
  };

  return (
    <div>
      <h3>LoginPage</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={"email"}>Email</label>
          <br/>
          <input
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Enter your email"}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <br/>
          <input
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"password"}
            onChange={handleChange}
            required
          />
        </div>
        <button type={"submit"}>로그인</button>
        <button onClick={handleCancel}>취소</button>  {/*이전 페이지로 이동*/}
      </form>

      <button name={"kakao"}>카카오로 로그인하기</button>
      <Link to={'/sign'}>회원가입</Link>
    </div>
  );
};

export default LoginPage;
