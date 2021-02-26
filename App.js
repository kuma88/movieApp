import React from "react";
import {StatusBar, ScrollView} from "react-native";
import MovieCard from "./components/MovieCard";
import styled from 'styled-components';
import PotraitCard from "./components/PortraitCard";

export default function App() {
  return (

    <Main>

      <StatusBar hidden/>
      <Navbar>
        <AppName>WatchFlix</AppName>
        <Avatar/>
      </Navbar>

      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              MovieCardData.map((data, index) => {

                return <MovieCard key={index} image={data.image}/>;

              })
            }

          </ScrollView>
        </MovieContainer>
        <Text>Continue Watching</Text>   

        <PortraitContainer >
            <ScrollView horizontal={true}>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
            </ScrollView>
        </PortraitContainer>

        <Text>Action</Text> 
        <PortraitContainer >
            <ScrollView horizontal={true}>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
            </ScrollView>
        </PortraitContainer>

        <Text>Comedy</Text> 
        <PortraitContainer >
            <ScrollView horizontal={true}>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
              <PotraitCard></PotraitCard>
            </ScrollView>
        </PortraitContainer>

      </ScrollView>

    </Main>
  );
}


const Main = styled.View `
flex : 1;
background-color :lightgray;
margin-top: 30px; 
`;

const Navbar = styled.View`
background: white;
width: 100%;
height: 70px;
`;

const Avatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 22px;
background: black;
position: absolute;
top: 10px;
right: 10px;
`;

const AppName = styled.Text`
color: red;
font-size: 30px;
margin-top: 10px;
margin-left: 10px;
`;


const MovieContainer = styled.View`
margin-top: 10px;
margin-left: 0px;
`;

const PortraitContainer = styled.View`
margin-top: 5px;
margin-left: 0px;
`;


const Text = styled.Text`
color: black;
font-size: 12px;
font-weight: 600;
margin-top: 15px;
margin-left: 5px;
text-transform: uppercase;

`;


const MovieCardData = [
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  }
]