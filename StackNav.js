import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import FakeScreen from "./screens/FakeScreen";
import PlayerScreen from "./screens/PlayerScreen";


const HomeStack = createStackNavigator({
    
    Home: HomeScreen,

    Player: PlayerScreen

});


const FakeStack = createStackNavigator({
    
    Home: {
        screen: FakeScreen,
    }

});


const BottomTab = createBottomTabNavigator({ HomeStack, FakeStack })




export default createAppContainer(BottomTab);