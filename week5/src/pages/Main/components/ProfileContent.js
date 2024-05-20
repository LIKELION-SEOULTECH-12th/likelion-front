import styled from "styled-components";

const ProfileContent = () => {
    return ( 
        <Profilecontentcontainer>
            <div class="nickname">
                <h3>멋쟁이사자처럼</h3>
            </div>
            <button class="edit">Edit Profile</button>
            <Userinfo>
                <ul>
                    <li>서울과학기술대학교</li>
                    <li>멋쟁이사자처럼 12기</li>
                    <li>
                        <a href="https://www.instagram.com/likelion_st/" target="_blank" rel="noreferrer">
                        https://www.instagram.com/likelion_st/
                        </a>
                    </li>
                </ul>
            </Userinfo>
        </Profilecontentcontainer>
    );
}
 
export default ProfileContent;

const Profilecontentcontainer = styled.div`
    @media all and (max-width: 767px) {
        font-size: 80%;
    }
`

const Userinfo = styled.div`
    ul {
        list-style: none;
        padding-left: 0px;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    a:hover {
        color: blue;
    }
`