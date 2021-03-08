import React from "react";
import styled from 'styled-components';


export default class Menucard extends React.Component {
    
    render() {
        return (

            <MenuContainer>

                <MenuCover/>

                <MenuOptions/>

            </MenuContainer>

        )
    }    
}


const MenuContainer = styled.View``;


const MenuCover = styled.View``;


const MenuOptions = styled.View``;