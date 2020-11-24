import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Text>My First App!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
