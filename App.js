import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const reducer = (state = {

  menu: "closeMenu",

  

}

) => {

  return state;

};

const database = createStore(reducer);


export default function App() {
  return (

    <Provider store={database}>

          <HomeScreen/>

    </Provider>




 );
}

