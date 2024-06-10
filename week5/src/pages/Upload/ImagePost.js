import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImagePostContainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }

  padding: 20px 15px;
  width: 100%;

  .postHeader {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .cancelBtn {
    width: 35px;
    height: 30px;
    margin-right: 70px;
  }
  .postTitle {
    font-size: 30px;
  }
  .content {
    display: flex;
    width: 100%;
  }
  .view {
    width: 60%;
  }
  .viewImage {
    width: 100%;
    height: auto;
  }
  .caption {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    position: relative;
  }
  .caption textarea {
    font-family: "Pretendard-Regular";
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 20px;
    border: none;
    resize: none;
    box-shadow: none;
    border-bottom: 1px solid lightgray;
  }
  .caption textarea:focus {
    outline: none;
  }
  .caption button {
    font-family: "Pretendard-Regular";
    margin-left: 25px;
    padding: 10px;
    font-size: 18px;
    background-color: #0095f6;
    border: none;
    border-radius: 8px;
    width: 100%;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.4s;
    text-align: center;
  }
  .caption button:disabled {
    background-color: #67b5fa;
    cursor: default;
  }
  .charCount {
    position: absolute;
    bottom: 70px;
    right: 10px;
    font-size: 16px;
    color: silver;
  }
`;

const ImagePost = () => {
  const [caption, setCaption] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    // 최대 글자수 제한
    if (text.length <= 1024) {
      setCaption(text);
    }
  };

  const upload = () => {
    // 서버와 연동하여 업로드 기능 구현 필요
  };

  return (
    <ImagePostContainer>
      <div className="postHeader">
        <div className="left">
          <span className="cancel">
            <StyledLink to="/selectImage">
              <img
                src="/img/arrow.png"
                alt="back button"
                className="cancelBtn"
              />
            </StyledLink>
          </span>
          <span className="postTitle">
            <b>새 게시물</b>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="view">
          <img src="/img/post1.JPG" alt="post1" className="viewImage" />
        </div>
        <div className="caption">
          <textarea
            name="caption"
            placeholder="문구를 입력하세요..."
            value={caption}
            onChange={handleChange}
            maxLength={1024}
          ></textarea>
          <span className="charCount">{caption.length}/1024</span>
          <button
            type="button"
            onClick={upload}
            disabled={caption.length === 0}
          >
            공유하기
          </button>
        </div>
      </div>
    </ImagePostContainer>
  );
};

export default ImagePost;
