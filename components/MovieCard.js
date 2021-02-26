import React, {useState} from "react";
import styled from 'styled-components';


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
