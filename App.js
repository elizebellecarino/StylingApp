import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Pin from './components/Pin/Pin'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      columns: 2,
      pin: {
        image1: {
          imageSource: require('./components/assets/travel.jpg'),
          originalWidth: 1576,
          originalHeight: 2101
        },
        image2: {
          imageSource: require('./components/assets/travel2.jpg'),
          originalWidth: 773,
          originalHeight: 500
        }
      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.pin.image1} columns={this.state.columns}/>
        <Pin pinsource={this.state.pin.image2} columns={this.state.columns}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
