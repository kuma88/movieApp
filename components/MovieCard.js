import React from "react";
import {Text, StyleSheet } from "react-native";
import styled from 'styled-components';
  


// export default function Hello() {
//   return (
//       <Text style={styles.someText}>{this.props.name}</Text>

//   );
// }


export default class MovieCard extends React.Component {
    render() {
        return (
          <Container>
            <Image source={{ uri: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"}} />
          </Container>

        )
    }
}


const Container = styled.View`
width: 250px;
height: 190px;
border-radius: 5px;
background: white;
overflow: hidden;
`;

const Image = styled.Image`
width: 100%;
height: 100%;
`;
