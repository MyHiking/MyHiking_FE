import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [inputAuthCode, setInputAuthCode] = useState("");
  const [password, setPasswotd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

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
          />
        </div>

        <div className="form-group">
          <label className="input-label">인증번호</label>
          <input
            type="text"
            className="input-field"
            placeholder="인증번호 입력"
          />
        </div>

        <div className="form-group">
          <label className="input-label">비밀번호</label>
          <input
            type="password"
            className="input-field"
            placeholder="비밀번호 입력"
          />
        </div>

        <div className="form-group">
          <label className="input-label">비밀번호 확인</label>
          <input
            type="password"
            className="input-field"
            placeholder="비밀번호 확인"
          />
        </div>

        <div className="form-group">
          <label className="input-label">닉네임</label>
          <input
            type="text"
            className="input-field"
            placeholder="닉네임 입력"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
