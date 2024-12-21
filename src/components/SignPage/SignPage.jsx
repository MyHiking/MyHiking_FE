import React, { useEffect, useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("123456");
  const [inputAuthCode, setInputAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // 이메일 인증 버튼 클릭 시 호출
  const sendEmailVerification = () => {
    if (countdown > 0) {
      alert("인증 코드는 60초 후에 다시 요청할 수 있습니다.");
      return;
    }
    setAuthCode("123456"); // 가짜 인증 코드 설정
    setCountdown(10); // 60초 카운트다운 시작
    alert("인증 코드가 이메일로 전송되었습니다. (123456)");
  };

  const verifyAuthCode = () => {
    if (authCode === inputAuthCode) {
      alert("인증 성공!");
    } else {
      alert("인증 실패. 인증 코드를 다시 확인하세요.");
    }
  };

  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("올바른 이메일을 입력해 주세요.");
      return;
    }
    if (authCode !== inputAuthCode) {
      alert("인증번호가 일치하지 않습니다.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 서로 다릅니다.");
      return;
    }
    if (nickname.trim().length < 2) {
      alert("닉네임은 2자 이상이어야 합니다.");
      return;
    }
    console.log("회원가입 성공!");
    console.log({ email, password, nickname });
  };

  return (
    <div className="register-page-container">
      <h2 className="register-title">회원가입</h2>
      <form className="register-form">
        <div className="form-group">
          <label className="input-label">이메일</label>
          <input
            type="email"
            className="input-field"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            onClick={sendEmailVerification}
            className="email-verification-button"
          >
            이메일 인증
          </button>
        </div>

        <div className="form-group">
          <label className="input-label">인증번호</label>
          <input
            type="text"
            className="input-field"
            placeholder="인증번호 입력"
            value={inputAuthCode}
            onChange={(e) => setInputAuthCode(e.target.value)}
          />
          <button
            type="button"
            onClick={verifyAuthCode}
            className="auth-code-verification-button"
          >
            인증코드 확인
          </button>
        </div>

        <div className="form-group">
          <label className="input-label">비밀번호</label>
          <input
            type="password"
            className="input-field"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">비밀번호 확인</label>
          <input
            type="password"
            className="input-field"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">닉네임</label>
          <input
            type="text"
            className="input-field"
            placeholder="닉네임 입력"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {/* 타이머 표시 */}
        <p>남은 시간: {countdown > 0 ? `${countdown}초` : "타이머 종료"}</p>

        <button type="button" className="submit-button" onClick={handleSubmit}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
