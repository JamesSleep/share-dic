import React from "react";
import Link from "next/link";
import styled from "styled-components";

/*
  **상단 네비게이션 컴포넌트**
  ImageContainer 로고
  List 메뉴
  
*/

const Header = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;

const List = styled.ul`
  height: 100%;
  padding-right: 130px;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  text-align: center;
  font-size: 17px;
  margin: 0 15px;
`;

const Slink = styled(Link)`

`;

const Button = styled.input`
  width: 150px;
  height: 50%;
  margin-left: 50px;
`;

const Navigation = () => (
  <Header>
    <ImageContainer>
      <Slink href="/">
      <Image src="/images/main_header.jpg" />
      </Slink>
    </ImageContainer>
    <List>
      <Item>
        <Slink href="/SearchOffice">사무실 찾기</Slink>
      </Item>
      <Item>
        <Slink href="/RegistOffice">사무실 내놓기</Slink>
      </Item>
      <Item>
        <Slink href="/FreePass">프리패스</Slink>
      </Item>
      <Item>
        <Slink href="/">관심매물</Slink>
      </Item>
      <Item>
        <Slink href="/Notification">알림</Slink>
      </Item>
      <Item>
        <Slink href="/Chatting">채팅</Slink>
      </Item>
      <Slink href="/Login">
        <Button type="button" value="로그인 / 회원가입" />
      </Slink>
    </List>
  </Header>
)

export default Navigation;