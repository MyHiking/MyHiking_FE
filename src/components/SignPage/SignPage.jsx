import React, { useEffect, useState } from "react";

const RegisterPage = () => {
  const [userEmail, setUserEmail] = useState(""); // 사용자가 입력한 이메일
  const [code, setCode] = useState(""); // 서버에서 받은 인증코드
  const [userCode, setUserCode] = useState(""); // 사용자가 입력한 인증코드
  const [userPassword, setUserPassword] = useState(""); // 사용자가 입력한 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [username, setUsername] = useState(""); // 사용자가 입력한 닉네임
  const [timer, setTimer] = useState(0); // 인증 제한 타이머 값
  const [isCodeVerified, setIsCodeVerified] = useState(false); // 인증 성공 여부

  useEffect(() => {
    let countdownTimer;
    if (timer > 0) {
      countdownTimer = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdownTimer);
  }, [timer]);

  const handleEmailVerification = (e) => {
    e.preventDefault();
    if (timer > 0) {
      alert("재인증은 60초 후에 가능합니다.");
      return;
    }

    const mockCode = "123456"; // 테스트용 인증 코드
    setCode(mockCode);
    setTimer(60); // 60초 타이머 시작
    alert(`테스트용 인증 코드: ${mockCode}`);
  };

  const handleCodeCheck = () => {
    if (userCode === code) {
      setIsCodeVerified(true);
      alert("인증 성공!");
    } else {
      alert("인증 실패. 인증코드를 확인해주세요.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userEmail.includes("@")) {
      alert("올바른 이메일을 입력해 주세요.");
      return;
    }
    if (!isCodeVerified) {
      alert("이메일 인증이 필요합니다.");
      return;
    }
    if (userPassword !== confirmPassword) {
      alert("비밀번호가 서로 다릅니다.");
      return;
    }
    if (username.trim().length < 2) {
      alert("닉네임은 2자 이상이어야 합니다.");
      return;
    }
    alert("회원가입 성공!");
    console.log({ userEmail, userPassword, username });
  };

  return (
    <div className="register-page-container">
      <h2 className="register-title">회원가입</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일 입력"
            required
          />
          <button type="button" onClick={handleEmailVerification}>
            이메일 인증
          </button>
        </div>

        <div className="form-group">
          <label>인증번호</label>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="인증번호 입력"
            required
          />
          <button type="button" onClick={handleCodeCheck}>
            인증코드 확인
          </button>
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="비밀번호 입력"
            required
          />
        </div>

        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인"
            required
          />
        </div>

        <div className="form-group">
          <label>닉네임</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="닉네임 입력"
            required
          />
        </div>

        <p>남은 시간: {timer > 0 ? `${timer}초` : "재전송 가능"}</p>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
