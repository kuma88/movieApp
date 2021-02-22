import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Hello from "./components/hello";
import styled from 'styled-components';

export default function App() {
  return (

    <Main>
      <SomeText>
        <Hello name='kuma'/>
      </SomeText>
    </Main>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

// });

const Main = styled.View `
flex : 1;
background-color :lightgray; 
align-items :center;
justify-content: center;
`;

const SomeText = styled.Text`
color : blue;
font-size :30px;
`;
