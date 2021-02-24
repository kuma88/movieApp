import React from "react";
import {StatusBar} from "react-native";
import MovieCard from "./components/MovieCard";
import styled from 'styled-components';

export default function App() {
  return (

    <Main>
      <StatusBar hidden/>
      <Navbar>
        <AppName>Movie App</AppName>
        <Avatar/>
      </Navbar>

      <MovieContainer>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </MovieContainer>
      
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
color: black;
font-size: 30px;
margin-top: 10px;
margin-left: 10px;
`;


const MovieContainer = styled.View`
margin-top: 10px;
margin-left: 10px;
`;
