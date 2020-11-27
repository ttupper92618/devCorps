import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 316px;
  height: 336px;
  background: white;
  margin-left: 21px;
  margin-top: 21px;
  border-radius: 16px;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.16);
`;

const Cover = styled.View`
  height: 261px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
`;

const Title = styled.Text`
  font-size: 21px;
  color: white;
  font-weight: 600;
  margin-top: 3px;
  margin-bottom: 21px;
  margin-left: 21px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  margin-left: 21px;
`;

const Content = styled.View`
  padding-left: 55px;
  justify-content: center;
  height: 73px;
`;

const Avatar = styled.Image`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 21px;
  left: 16px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;

const Author = styled.Text`
  font-size: 12px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 3px;
`;

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo resizeMode="contain" source={props.logo} />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Taught by {props.author}</Author>
    </Content>
  </Container>
);

export default Course;
