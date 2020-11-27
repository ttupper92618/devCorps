import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./Components/Card";
import * as Icon from "@expo/vector-icons";
import { NotificationIcon } from "./Components/Icons";
import Logo from "./Components/Logo";
import { logos } from "./assets/staticData/Logos";
import { cards } from "./assets/staticData/Cards";
import { courses } from "./assets/staticData/Courses";
import Course from "./Components/Course";

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 21px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 21px;
  padding-left: 70px;
`;

const Avatar = styled.Image`
  width: 43px;
  height: 43px;
  background: black;
  border-radius: 43px;
  margin-left: 21px;
  position: absolute;
  top: 2px;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b9bece;
  font-weight: 600;
  font-size: 16px;
  margin-left: 21px;
  margin-top: 16px;
  text-transform: uppercase;
`;

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Thomas</Name>
            <NotificationIcon
              style={{ position: "absolute", right: 21, top: 7 }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              padding: 21,
              paddingLeft: 12,
              paddingTop: 30,
            }}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue learning...</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
