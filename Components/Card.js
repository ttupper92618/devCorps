import React from "react";
import styled from "styled-components";

const Container = styled.View`
  background: white;
  width: 316px;
  height: 280px;
  border-radius: 16px;
  margin-left: 21px;
  margin-top: 21px;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.16);
`;

const Cover = styled.View`
  width: 100%;
  height: 201px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 21px;
  font-weight: bold;
  margin: 21px 0 0 21px;
  width: 100%;
`;

const Content = styled.View`
  padding-left: 17px;
  flex-direction: row;
  align-items: center;
  height: 79px;
`;

const Logo = styled.Image`
  width: 43px;
  height: 43px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 19px;
  font-weight: 600;
  margin-left: 7px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 3px;
  margin-left: 7px;
`;

const Wrapper = styled.View``;

const Card = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
