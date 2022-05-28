import React from "react";
import bg from "./hero-bg.png";
import styled from "styled-components";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  position: relative;
`;

const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const ContentHeader = styled.div`
  max-width: 600px;
  font-size: 70px;
  line-height: 74px;
  margin-bottom: 15px;
`;

const Content = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: serif;
  text-align: center;
`;

const ContentSub = styled.div`
  font-size: 22px;
`;

const Header = styled.div`
  padding: 15px 50px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 40px;
`;

const HeroComponent = () => {
  return (
    <HeroWrapper>
      <Background>
        <Header>SARTHAK SETIA</Header>
      </Background>
      <Content>
        <ContentHeader>Not Your Average Software Engineer</ContentHeader>
        <ContentSub>
          Get ready to turn your <em>ideas</em> into <em>reality</em>
        </ContentSub>
      </Content>
    </HeroWrapper>
  );
};

export default HeroComponent;
