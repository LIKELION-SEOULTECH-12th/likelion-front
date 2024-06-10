import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SelectContainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }

  padding: 20px 15px;
  width: 100%;

  .selectHeader {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .selectTitle {
    font-size: 30px;
  }
  .next {
    color: #0095f6;
  }
  .view {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: lightgray;
  }
  .viewImage {
    width: 50%;
    height: auto;
  }
  .gallery {
    margin: 25px 0;
    font-size: 18px;
  }
`;

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
    max-width: 1000px; /* 그리드 이미지 섹션의 최대 너비를 설정 */
    margin: 0 auto; /* 가운데 정렬 */
  }

  @media all and (max-width: 767px) {
    padding: 20px;
  }
`;

const SelectImage = () => {
  return (
    <SelectContainer>
      <div className="selectHeader">
        <div className="left">
          <span className="cancel">
            <StyledLink to="/">
              <img
                src="/img/arrow.png"
                alt="back button"
                className="cancelBtn"
              />
            </StyledLink>
          </span>
          <span className="selectTitle">
            <b>새 게시물</b>
          </span>
        </div>
        <span className="next">
          <StyledLink to="/imagePost">
            <b>다음</b>
          </StyledLink>
        </span>
      </div>
      <div className="view">
        <img src="/img/post1.JPG" alt="post1" className="viewImage" />
      </div>
      <div className="select">
        <div className="gallery">
          <b>갤러리 ▼</b>
        </div>
        <Gridcontainer>
          서버와 연동하여 이미지를 불러올 영역 (가로 4칸 x 세로 무한 스크롤)
          <img src="/img/post1.JPG" alt="post1" />
          <img src="/img/post2.JPG" alt="post2" />
          <img src="/img/post3.JPG" alt="post3" />
          <img src="/img/post1.JPG" alt="post1" />
          <img src="/img/post2.JPG" alt="post2" />
          <img src="/img/post3.JPG" alt="post3" />
          <img src="/img/post1.JPG" alt="post1" />
          <img src="/img/post2.JPG" alt="post2" />
          <img src="/img/post3.JPG" alt="post3" />
          <img src="/img/post1.JPG" alt="post1" />
          <img src="/img/post2.JPG" alt="post2" />
          <img src="/img/post3.JPG" alt="post3" />
          <img src="/img/post1.JPG" alt="post1" />
          <img src="/img/post2.JPG" alt="post2" />
          <img src="/img/post3.JPG" alt="post3" />
        </Gridcontainer>
      </div>
    </SelectContainer>
  );
};

export default SelectImage;
