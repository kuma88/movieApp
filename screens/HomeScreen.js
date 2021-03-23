import React from "react";
import {StatusBar, ScrollView, TouchableOpacity, Animated, Dimensions} from "react-native";
import styled from 'styled-components';
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../components/MovieCard";
import PotraitCard from "../components/PortraitCard";
import Menucard from "../components/MenuCard";
import { connect } from "react-redux";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmT6zSYylTrwNpBh2P6WLesCGTuh8uMmY",
  authDomain: "reactmediaapp-de0bc.firebaseapp.com",
  databaseURL: "https://reactmediaapp-de0bc-default-rtdb.firebaseio.com",
  projectId: "reactmediaapp-de0bc",
  storageBucket: "reactmediaapp-de0bc.appspot.com",

};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {

    return { menu: state.menu};
}

function mapDispatchToProps(dispatch){

    return { 
        
        openMenu: () => 
        
            dispatch({

                type: "OPENMENU"
            })
    };
}


class HomeScreen extends React.Component {

  static navigationOptions = {

    headerShown: false

  };

  state = {
    
    top: new Animated.Value(screenHeight),

    opacity: new Animated.Value(0)

  }

  componentDidMount(){
    this.database = firebaseApp.database().ref().child("PotraitCardData");
    this.database.on("value", snap => {

    let cardData = [];

      snap.forEach(child => {
        cardData.push({

          title: child.val().title,

          image: child.val().image
        });

      });

    console.log(cardData)

    })


  }

  componentDidUpdate(){
    this.changeBackgroundColor()
  }

  changeBackgroundColor(){

    if (this.props.menu == "openMenu") {
      Animated.timing(this.state.top, { toValue:0, duration: 10, useNativeDriver: false }).start();
      Animated.timing(this.state.opacity, { toValue:0.8, duration: 100, useNativeDriver: false }).start();
    }


    if (this.props.menu == "closeMenu") {
      Animated.timing(this.state.top, { toValue:screenHeight, duration: 10, useNativeDriver: false  }).start();
      Animated.spring(this.state.opacity, { toValue:0, useNativeDriver: false}).start();
    }
  }

  render() {

      return (

        <Body>

          <Main>

          <StatusBar hidden/>

          <Navbar>
            <TouchableOpacity onPress={this.props.openMenu}
            
            style={{
                    position: "absolute",
                    top: 30,
                    left: 10,

                }}
            
            >
            
                <Ionicons name="ios-menu" 
                
                color="grey" size={40}


                />
                
            </TouchableOpacity>

            <AppName>App Development</AppName>
            <Avatar/>
          </Navbar>

          
          <ScrollView showsVerticalScrollIndicator={false}>
              <MovieContainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                  MovieCardData.map((data, index) => {

                      return <MovieCard key={index} image={data.image}/>;

                  })
                  }

              </ScrollView>
              </MovieContainer>

              <Text>PC WEB Series</Text>   

              <PortraitContainer >
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                      PotraitCardData.map((data, index) => {

                      return <PotraitCard key={index} image={data.image} title={data.title}/>;

                      })

                  }
                  </ScrollView>
              </PortraitContainer>


              <Text>PC MOB Series</Text> 

              <PortraitContainer >
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  
                  {
                      PotraitCardData.map((data, index) => {

                      return (

                        <TouchableOpacity key={index} onPress={() => {this.props.navigation.push("Player", {
                          
                            video: data,

                            categories: PotraitCardData

                          });
                        
                        }}>

                          <PotraitCard image={data.image} title={data.title}/>

                        </TouchableOpacity>

                      )})

                  }

                  </ScrollView>
              </PortraitContainer>

          </ScrollView>

          </Main>

          <AnimatedBackground style={{ top:this.state.top, opacity: this.state.opacity}} ></AnimatedBackground>

          <Menucard></Menucard>

        </Body>
      );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const Body = styled.View `
flex : 1;
`;

const Main = styled.View `
flex : 1;
background-color :lightgray;
margin-top: 0px; 
`;

const ChangeBackground = styled.View`
background:black;
position: absolute;
width: 100%;
height: 100%;
opacity: 0.5;
`;

const AnimatedBackground = Animated.createAnimatedComponent(ChangeBackground);


const Navbar = styled.View`
background: white;
width: 100%;
height: 80px;
`;

const Avatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 22px;
background: black;
position: absolute;
top:20px;
right: 10px;
`;

const AppName = styled.Text`
color: red;
font-size: 25px;
margin-top: 35px;
margin-left: 60px;
`;


const MovieContainer = styled.View`
margin-top: 10px;
margin-left: 0px;
`;

const PortraitContainer = styled.View`
margin-top: 5px;
margin-left: 0px;
`;


const Text = styled.Text`
color: black;
font-size: 12px;
font-weight: 600;
margin-top: 15px;
margin-left: 5px;
text-transform: uppercase;
`;


const MovieCardData = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB2.JPG?alt=media&token=013e7ef5-4e4a-478a-8a90-b4910e973161",

    title: "Movie1"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB3.JPG?alt=media&token=82d537f7-bb4d-4609-8459-74dc0464f908",

    title: "Movie2"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB4.JPG?alt=media&token=a3ddff70-464f-4f29-a3be-4f5b6497ccd8",

    title: "Movie3"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB5.JPG?alt=media&token=5ff06431-cae4-475d-ad83-ecd0f1190a4a",

    title: "Movie4"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB5.JPG?alt=media&token=5ff06431-cae4-475d-ad83-ecd0f1190a4a",

    title: "Movie5"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB6.JPG?alt=media&token=5fdd1a4d-e3af-4c6e-a644-01ad6c42e76f",

    title: "Movie6"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB6B.JPG?alt=media&token=48757389-b418-4b7b-ad2e-125a03e55e50",

    title: "Movie6"
  },
]


const PotraitCardData = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB2.JPG?alt=media&token=013e7ef5-4e4a-478a-8a90-b4910e973161",

    title: "EP1"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB3.JPG?alt=media&token=82d537f7-bb4d-4609-8459-74dc0464f908",

    title: "EP2"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB4.JPG?alt=media&token=a3ddff70-464f-4f29-a3be-4f5b6497ccd8",

    title: "EP3"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB5.JPG?alt=media&token=5ff06431-cae4-475d-ad83-ecd0f1190a4a",

    title: "EP4"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB6.JPG?alt=media&token=5fdd1a4d-e3af-4c6e-a644-01ad6c42e76f",

    title: "EP5"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB6B.JPG?alt=media&token=48757389-b418-4b7b-ad2e-125a03e55e50",

    title: "EP6"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/reactmediaapp-de0bc.appspot.com/o/PCWEB7.JPG?alt=media&token=a77ca817-247f-42e8-a89b-53891a42574f",

    title: "EP7"
  },

]