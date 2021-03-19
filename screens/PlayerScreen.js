import React from "react";

// import { ScrollView } from "react-native";

import styled from "styled-components";

import { TouchableOpacity } from "react-native";

import { Video } from "expo-av"

// import PotraitCard from "../components/PortraitCard";


class PlayerScreen extends React.Component {

  // static navigationOptions = {

  //   header: null

  // };

   render() {

    const { navigation } = this.props;

    const video = navigation.getParam("video");

    return (
      <Container>
        <VideoContainer>
          <Video source = {{

            uri: "http://techslides.com/demos/sample-videos/small.mp4"

          }} shouldPlay 
          resizeMode="cover"
          useNativeControls={true}  
          style={{ width: "100%" , height: "100%"}}
          />

        </VideoContainer>

        <VideoTitle>{video.title}</VideoTitle>

        <Text>Continue Watching</Text>   


      </Container>

    );

   }

}

export default PlayerScreen;

const Container = styled.View`
  flex: 1;
  background-color :lightgray;
`;

const VideoContainer = styled.View`
  width: 100%;
  height: 280px;
  background: black;

`;

const VideoTitle = styled.Text`
margin-top: 10px;
margin-left: 5px;
color: black;
font-size: 16px;
font-weight: 600;

`;


const Text = styled.Text`
color: black;
font-size: 12px;
font-weight: 600;
`;