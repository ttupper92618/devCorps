import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 61px;
  padding: 3px 16px 3px;
  border-radius: 12px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.07);
  align-items: center;
  margin: 0 7px;
`;

const Image = styled.Image`
  height: 34px;
  width: 34px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-left: 7px;
`;

const Logo = (props) => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;
