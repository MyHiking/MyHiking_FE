// 2단계: 입력 필드들 추가
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <form>
        {/* 1. 이메일 */}
        <div>
          <label>이메일</label>
          <input type="email" placeholder="이메일 입력" />
        </div>

        {/* 2. 인증번호 */}
        <div>
          <label>인증번호</label>
          <input type="text" placeholder="인증번호 입력" />
        </div>

        {/* 3. 비밀번호 */}
        <div>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" />
        </div>

        {/* 4. 비밀번호 확인 */}
        <div>
          <label>비밀번호 확인</label>
          <input type="password" placeholder="비밀번호 확인" />
        </div>

        {/* 5. 닉네임 */}
        <div>
          <label>닉네임</label>
          <input type="text" placeholder="닉네임 입력" />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
