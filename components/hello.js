import React from "react";
import {Text, StyleSheet } from "react-native";
  


// export default function Hello() {
//   return (
//       <Text style={styles.someText}>{this.props.name}</Text>

//   );
// }


export default class Hello extends React.Component {
    render() {
        return <Text style={styles.someText}>hELLO {this.props.name}</Text>
    }
}

const styles = StyleSheet.create({
  someText:{
    backgroundColor: 'red',
    marginBottom: 5,

  }
});