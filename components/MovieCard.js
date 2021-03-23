import React, {useState} from "react";
import styled from 'styled-components';
import {LinearGradient} from "expo-linear-gradient";


// export default function MovieCard() {
//   return (
//       <Container>
//         <Image source={{ uri: this.props.image}} />
//       </Container>
//   );
// }


export default class MovieCard extends React.Component {

    render() {

        return (
          
          <Container>
            <Image source={{ uri: this.props.image}} />

            <LinearGradient

            colors = {["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]} 

            style={{ position: "absolute", width: "100%", height: "50%", marginTop: 130}}/>

          </Container>

        )
    }
}


const Container = styled.View`
width: 380px;
height: 230px;
border-radius: 5px;
background: white;
overflow: hidden;
margin-left: 5px;
`;

const Image = styled.Image`
width: 100%;
height: 100%;
`;
