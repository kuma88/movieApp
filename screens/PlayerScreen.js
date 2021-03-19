import React from "react";

import styled from "styled-components";

import { TouchableOpacity } from "react-native";



class PlayerScreen extends React.Component {

   render() {

    const { navigation } = this.props;

    const video = navigation.getParam("video");

    return (
      <Container>
        <Text>{video.title}</Text>
      </Container>

    );

   }

}

export default PlayerScreen;

const Container = styled.View`
  
  flex: 1;

  align-items: center;

  justify-content: center;

`;

const Text = styled.Text`
color: black;
font-size: 12px;
font-weight: 600;
`;