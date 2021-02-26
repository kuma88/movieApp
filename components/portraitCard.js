import React from "react";
import styled from 'styled-components';
  

export default class PotraitCard extends React.Component {
    render() {
        return (
          <Container>
            <Image source={{ uri: this.props.image}} />
          </Container>

        )
    }
}


const Container = styled.View`
width: 140px;
height: 200px;
border-radius: 5px;
background: white;
overflow: hidden;
margin-left: 5px;
`;

const Image = styled.Image`
width: 100%;
height: 100%;
`;
