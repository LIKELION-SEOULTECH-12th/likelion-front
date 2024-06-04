import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProfileEditContainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }
  padding: 20px 15px;

  .editHeader > span {
    margin-right: 70px;
  }
  .saveBtn {
    width: 35px;
    height: 30px;
  }
  .editTitle {
    font-family: "Pretendard-Bold";
    font-size: 30px;
  }
  .pic {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 30px 0;
  }
  .picEdit {
    color: #0095f6;
    font-size: 14px;
  }
  .txtTitle {
    color: gray;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .txtEdit {
    font-size: 14px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid darkgray;
  }
`;

const Imgcontainer = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid gray;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 30px;

  @media all and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;

const ProfileEdit = () => {
  return (
    <ProfileEditContainer>
      <div className="editHeader">
        <span className="editSave">
          <StyledLink to="/">
            <img src="/img/arrow.png" alt="back button" className="saveBtn" />
          </StyledLink>
        </span>
        <span className="editTitle">프로필 편집</span>
      </div>
      <div className="pic">
        <Imgcontainer>
          <img src="/img/profile.png" alt="profile_image" />
        </Imgcontainer>
        <div className="picEdit">사진 또는 아바타 수정</div>
      </div>
      <div className="txt">
        <div className="txtTitle">이름</div>
        <div className="txtEdit">서버에서 이름을 받아와 수정할 부분</div>
        <div className="txtTitle">사용자 이름</div>
        <div className="txtEdit">서버에서 닉네임을 받아와 수정할 부분</div>
        <div className="txtTitle">소개</div>
        <div className="txtEdit">서버에서 소개글을 받아와 수정할 부분</div>
      </div>
    </ProfileEditContainer>
  );
};
export default ProfileEdit;
