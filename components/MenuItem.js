import React from "react";
import styled from 'styled-components';
import { Ionicons } from "@expo/vector-icons";


const MenuItem = props => (

    <Container>

        <Iconview>
            <Ionicons name={props.icon} size={30} color="gray"></Ionicons>        
        </Iconview>

        <Contentview>
            <MenuButton>{props.text}</MenuButton>

            <MenuText>{props.caption}</MenuText>
        </Contentview>

    </Container>
)


export default MenuItem;



const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
`;

const Iconview = styled.View`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
`;

const Contentview = styled.View`
    padding-left: 25px;
`;

const MenuButton = styled.Text`
    font-size: 40px;
    font-weight: 500;
    color: black;
    margin-top: 30px;
`;

const MenuText = styled.Text`
    font-size: 20px;
    color: black;
`;
