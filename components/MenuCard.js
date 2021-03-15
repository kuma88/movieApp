import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from 'styled-components';
import { Animated, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect, dispatch } from "react-redux";

function mapStateToProps(state) {

    return { menu: state.menu};
}


function mapDispatchToProps(dispatch) {

    return { 

        closeMenu: () => dispatch({

            type: "CLOSEMENU"
        })
    }
}

class Menucard extends React.Component {

    state = {

        top: new Animated.Value(900)

    };

    componentDidMount() {

        this.menu();

    }

    componentDidUpdate() {

        this.menu();
    }


    menu = () => {
  
        if(this.props.menu == "openMenu"){

            Animated.spring(this.state.top, { toValue: 0}).start();

        }

        if(this.props.menu == "closeMenu"){

            Animated.spring(this.state.top, { toValue: 900}).start();
                            
        }

    }

    
    render() {

        return (

            <AnimatedMenuContainter style={{ position: "absolute", top: this.state.top, zIndex:100 }}>

                <MenuCover>

                    <LinearGradient
                        
                        colors = {["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1),"]}

                        style = {{

                            width: "100%",

                            height: "100%"

                        }} 

                    />

                </MenuCover>

                    <TouchableOpacity style={{

                        position : "absolute",

                        top: 125,

                        left: "50%",

                        marginLeft: -25
                    }}
                    
                    onPress={this.props.closeMenu}
                    >

                        <CloseCard>

                            <Ionicons name="ios-close" size={25}/>

                        </CloseCard>

                    </TouchableOpacity>
                    

                <MenuOptions/>

            </AnimatedMenuContainter>

        )
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Menucard);


const MenuContainer = styled.View`

    width: 100%;
    height: 120%;
    background: white;

    
`;


const MenuCover = styled.View`

    width: 100%;
    height: 150px;


`;


const MenuOptions = styled.View``;


const AnimatedMenuContainter = Animated.createAnimatedComponent(MenuContainer);


const CloseCard = styled.View`

    width: 50px;
    height: 50px;
    border-radius: 22px;
    background-color: grey;
    justify-content: center;
    align-items: center;


`;