import React from "react";
import styled from 'styled-components';
import {LinearGradient} from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"


export default class PotraitCard extends React.Component {

    render() {

        return (
          
          <Container>


            <Image source={{ uri: this.props.image}} />

            <LinearGradient

              colors = {["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 0.9)"]} 
              
              style={{ position: "absolute", width: "100%", height: "60%", marginTop: 120}}/>


            <PotraitCardTextContainer>

              <Ionicons name="ios-play" color="white" size={10}/>

              <PotraitCardText>S1 E02</PotraitCardText>

            </PotraitCardTextContainer>

            
          </Container>

        )
    }
}


const Container = styled.View`
width: 100px;
height: 150px;
border-radius: 5px;
background: white;
overflow: hidden;
margin-left: 5px;
`;

const Image = styled.Image`
width: 100%;
height: 100%;
`;

const PotraitCardText = styled.Text`
color: white;
font-size: 10px;
font-weight: 500;
text-transform: uppercase;
margin-left: 5px;
`;

const PotraitCardTextContainer = styled.View`

position: absolute;
margin-top: 130px;
margin-left: 5px;
flex-direction: row;
align-items: center;

`