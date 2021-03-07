import React from "react";
import styled from 'styled-components';
import {LinearGradient} from "expo-linear-gradient";

export default class PotraitCard extends React.Component {
    render() {
        return (
          <Container>


            <Image source={{ uri: this.props.image}} />

            <LinearGradient

              colors = {["rgba(0, 0, 245, 0)", "rgba(0, 0, 255, 0.9)"]} 
              
              style={{ position: "absolute", width: "100%", height: "60%", marginTop: 100}}/>

            <PotraitCardText>Watch Now</PotraitCardText>
            
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
z-index: -1.5;
`;

const PotraitCardText = styled.Text`
position: absolute;
color: white;
font-size: 12px;
font-weight: 500;
margin-top: 130px;
margin-left: 8px;
text-transform: uppercase;
`;