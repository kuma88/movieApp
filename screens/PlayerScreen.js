import React from "react";

import { ScrollView } from "react-native";

import styled from "styled-components";

import { TouchableOpacity } from "react-native";

import { Video } from "expo-av"

import PotraitCard from "../components/PortraitCard";


class PlayerScreen extends React.Component {


   render() {

    const { navigation } = this.props;

    const data = navigation.getParam("video");

    const PotraitCardData = navigation.getParam("categories");

    return (
      <Container>
        <VideoContainer>
          <Video source = {{

            uri: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB2-1.mp4?alt=media&token=683ae09b-3713-4d79-952c-7b70cc88d95e"

          }} shouldPlay 
          resizeMode="cover"
          useNativeControls={true}  
          style={{ width: "100%" , height: "100%"}}
          />

        </VideoContainer>

        <VideoTitle>{data.title}</VideoTitle>

        <Text>You may also like</Text>


        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  
          {
              PotraitCardData.map((data, index) => {

              return (

                <TouchableOpacity key={index} onPress={() => {this.props.navigation.push("Player", {
                  
                    video: data,

                    categories: PotraitCardData

                  });
                
                }}>

                  <PotraitCard image={data.image}/>

                </TouchableOpacity>

              )})

          }

        </ScrollView>


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
margin-bottom: 10px;
margin-left: 5px;
color: black;
font-size: 16px;
font-weight: 600;

`;

const Text = styled.Text`
color: black;
font-size: 12px;
font-weight: 600;
margin-top: 15px;
margin-left: 5px;
margin-bottom: 15px;
text-transform: uppercase;

`;