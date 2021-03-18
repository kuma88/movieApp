import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";

const HomeStack = createStackNavigator({
    
    Home: {
        screen: HomeScreen,
    }
    
});


const BottomTab = createBottomTabNavigator({ HomeStack })




export default createAppContainer(BottomTab);