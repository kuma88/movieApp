import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import BottomTab from "./StackNav";
//import HomeScreen from "./screens/HomeScreen";



const reducer = (state = { menu: "closeMenu"}, command) => {

  if (command.type == "OPENMENU") {

    return {menu: "openMenu"};

  }else if (command.type == "CLOSEMENU") {

    return {menu: "closeMenu"};

  }

  return state;

};

const database = createStore(reducer);


export default function App() {
  return (

    <Provider store={database}>

          <BottomTab/>

    </Provider>

 );
}

