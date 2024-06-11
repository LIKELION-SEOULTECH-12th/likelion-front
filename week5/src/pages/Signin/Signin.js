import styled from "styled-components";
import { useState, useEffect } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    toggleJoinButton();
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
    setIsJoinButtonDisabled(true);
  };

  const toggleJoinButton = () => {
    let isEmailValid = true;
    let isPasswordValid = true;

    if (email && !validateEmail(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      isEmailValid = false;
    } else {
      setEmailError("");
    }

    if (password && password.length < 7) {
      setPasswordError("비밀번호는 7자 이상이어야 합니다.");
      isPasswordValid = false;
    } else {
      setPasswordError("");
    }

    setIsJoinButtonDisabled(
      !(
        isEmailValid &&
        isPasswordValid &&
        email &&
        password &&
        name &&
        username
      )
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // api 연결 부분
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email) && password.length >= 7) {
      alert("정상적으로 회원가입 되었습니다.");
      handleReset();
      window.location.href = "/";
    }
  };

  return (
    <SigninContainer>
      <ContainerBorder>
        <img src="../img/text_logo.png" alt="로고" />
        <div className="hook">
          <b>친구들의 사진과 동영상을 보려면 가입하세요.</b>
        </div>
        <form
          className="joinForm"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="inputBox">
            <input
              type="text"
              className="email"
              placeholder="휴대폰 번호 또는 이메일 주소"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="errorMessage">{emailError}</div>
            <input
              type="text"
              className="nm"
              placeholder="성명"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              className="username"
              placeholder="사용자 이름"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              className="pw"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="errorMessage">{passwordError}</div>
          </div>
          <div className="buttonBox">
            <button
              type="submit"
              className={
                isJoinButtonDisabled ? "disabledButton" : "enabledButton"
              }
            >
              가입
            </button>
          </div>
        </form>

        <div className="info">
          가입하면 Instagram의 <b>약관, 데이터 정책 및 쿠키 정책</b>에 동의하게
          됩니다.
        </div>
      </ContainerBorder>
    </SigninContainer>
  );
};

export default Signin;

const SigninContainer = styled.div`
  width: 350px;
  margin: 100px auto 0;
  min-height: 502px;
`;

const ContainerBorder = styled.div`
  border: 1px solid #dbdbdb;
  height: 502px;
  padding: 0 40px;

  img {
    width: 195px;
    margin: 30px auto 0;
    display: block;
  }

  .hook {
    text-align: center;
    font-size: 17px;
    color: gray;
    margin: 12px 0;
  }

  .inputBox {
    margin-top: 15px;
  }

  .errorMessage {
    color: red;
    font-size: 11px;
    margin: 0 0 6px 2px;
  }

  input {
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fafafa;
    border: none;
    border: 1px solid #dfdfdf;
    &::placeholder {
      font-size: 12px;
      font-weight: 350;
    }

    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }

  .email,
  .nm,
  .username,
  .pw {
    margin-bottom: 6px;
  }

  button {
    width: 100%;
    margin-top: 12px;
    padding: 8px 0;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-weight: bold;
    color: white;
    transition: background-color 0.4s;
    text-align: center;
    cursor: pointer;
  }

  button.disabledButton {
    background-color: #67b5fa;
  }

  button.enabledButton {
    background-color: #3981e5;
  }

  .joinBox button:disabled {
    cursor: default;
  }

  .joinBox button[type="submit"]:not([disabled]) {
    background-color: #0095f6;
  }

  .info {
    text-align: center;
    padding: 25px 0;
    font-size: 12px;
    color: gray;
  }
`;
