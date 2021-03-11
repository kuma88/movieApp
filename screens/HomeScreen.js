import React from "react";
import {StatusBar, ScrollView, TouchableOpacity} from "react-native";
import styled from 'styled-components';
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../components/MovieCard";
import PotraitCard from "../components/PortraitCard";
import Menucard from "../components/MenuCard";
import { connect } from "react-redux";


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

    render() {

        return (

            <Main>

            <Menucard></Menucard>

            <StatusBar hidden/>

            <Navbar>
            <TouchableOpacity onPress={this.props.openMenu}
            


            style={{
                    position: "absolute",
                    top: 10,
                    left: 10,

                }}
            
            >
            
                <Ionicons name="ios-menu" 
                
                color="grey" size={40}


                />

                
            </TouchableOpacity>

                <AppName>MovieApp</AppName>
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
                <Text>Continue Watching</Text>   

                <PortraitContainer >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        PotraitCardData.map((data, index) => {

                        return <PotraitCard key={index} image={data.image}/>;

                        })

                    }
                    </ScrollView>
                </PortraitContainer>

                <Text>Action</Text> 
                <PortraitContainer >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        PotraitCardData.map((data, index) => {

                        return <PotraitCard key={index} image={data.image}/>;

                        })

                    }
                    </ScrollView>
                </PortraitContainer>

                <Text>Comedy</Text> 
                <PortraitContainer >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        PotraitCardData.map((data, index) => {

                        return <PotraitCard key={index} image={data.image}/>;

                        })

                    }

                    </ScrollView>
                </PortraitContainer>


            </ScrollView>

            </Main>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);



const Main = styled.View `
flex : 1;
background-color :lightgray;
margin-top: 20px; 
`;

const Navbar = styled.View`
background: white;
width: 100%;
height: 60px;

`;

const Avatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 22px;
background: black;
position: absolute;
top: 0px;
right: 10px;
`;

const AppName = styled.Text`
color: red;
font-size: 25px;
margin-top: 15px;
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
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/202/c5724d58808319.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
  },
]


const PotraitCardData = [
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89347/94605/The-Dark-Knight-Final-Style-Bat-Logo-on-fire-Double-sided-original-movie-poster-buy-now-at-starstills__20500.1599750099.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89385/94697/Mulan-double-sided-original-movie-poster-buy-now-at-starstills__05117.1601565118.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89383/94693/Django-Unchained-International-Style-poster-buy-original-movie-posters-at-starstills__19377.1601564325.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/86734/86287/pain_and_gain_poster_buy_original_movie_posters_at_starstills__45691__92167.1394515537.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/86599/86152/monsters_inc_3d_poster_buy_original_movie_posters_at_starstills__73080__44859.1394515416.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89347/94605/The-Dark-Knight-Final-Style-Bat-Logo-on-fire-Double-sided-original-movie-poster-buy-now-at-starstills__20500.1599750099.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89385/94697/Mulan-double-sided-original-movie-poster-buy-now-at-starstills__05117.1601565118.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/89383/94693/Django-Unchained-International-Style-poster-buy-original-movie-posters-at-starstills__19377.1601564325.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/86734/86287/pain_and_gain_poster_buy_original_movie_posters_at_starstills__45691__92167.1394515537.jpg?c=2"
  },
  {
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/320w/products/86599/86152/monsters_inc_3d_poster_buy_original_movie_posters_at_starstills__73080__44859.1394515416.jpg?c=2"
  },
]