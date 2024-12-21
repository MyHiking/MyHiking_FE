import React from "react";
import "../Style/signpage.scss";
import SignHeader from "./SignHeader";

const SignPage = () => {
  return (
    <div className="signPage">
      <SignHeader />
      <div className="sign-content">
        <h2>회원가입</h2>
        <form className="register-form">
          <div className="form-group">
            <label>이메일</label>
            <div className="email-input">
              <input type="email" placeholder="이메일" />
              <button type="button">인증</button>
            </div>
            <input className="text" placeholder="인증번호 입력" />
          </div>

          <div className="form-group">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호 입력" />
            <input type="password" placeholder="비밀번호 확인" />
          </div>

          <div className="form-group">
            <label>닉네임</label>
            <div className="agreement">
              <div>
                <input type="checkbox" id="all-agree" />
                <label htmlFor="all-agree">전체동의</label>
              </div>
              <div>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">이용약관</label>
              </div>
              <div>
                <input type="checkbox" id="privacy" />
                <label htmlFor="privacy">개인정보 수집 및 이용동의</label>
              </div>
              <div>
                <input type="checkbox" id="marketing" />
                <label htmlFor="marketing">마케팅 이메일 수신</label>
              </div>
            </div>
          </div>

          <button type="submit" className="register-btn">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignPage;
