import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";
import PlayerScreen from "./screens/PlayerScreen";
import TvScreen from "./screens/TvScreen";
import { Ionicons } from "@expo/vector-icons";



const HomeStack = createStackNavigator({
    
    Home: HomeScreen,

    Player: PlayerScreen

});

HomeStack.navigationOptions = {
    tabBarLabel: "Home",

    tabBarIcon: ({ focused }) => (
        <Ionicons name="ios-home" size={20} color={focused ? "blue" : "black"}/>
    )
}


const VideoStack = createStackNavigator({
    
    Home: {
        screen: VideoScreen,
    }

});

VideoStack.navigationOptions = {
    tabBarLabel: "Movies",

    tabBarIcon: ({ focused }) => (
        <Ionicons name="ios-film" size={20} color={focused ? "blue" : "black"}/>
    )
}

const TvStack = createStackNavigator({
    
    Home: {
        screen: TvScreen,
    }

});

TvStack.navigationOptions = {
    tabBarLabel: "TV",

    tabBarIcon: ({ focused }) => (
        <Ionicons name="ios-tv" size={20} color={focused ? "blue" : "black"}/>
    )

}


const BottomTab = createBottomTabNavigator({ HomeStack, VideoStack, TvStack  })




export default createAppContainer(BottomTab);