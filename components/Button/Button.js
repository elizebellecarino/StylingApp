import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Thumbtack } from '../icons'
import UtilityNavButton from '../UtilityNavButton/UtilityNavButton'

export default class Button extends Component {
    render() {
        let bgColor, textWeight, textColor
        if(this.props.red) {
            bgColor='#800000'
            textColor= 'white'
        }else {
            bgColor='#808080'
            textWeight= 'bold',
            textColor= 'black'
        }
      return (
              <View style={[styles.pinButton, {backgroundColor: bgColor}]}>
                {this.props.icon && <Thumbtack />}
                <Text style={[styles.pinButtonText, {fontWeight: textWeight, color: textColor}]}>{this.props.text}</Text>
              </View>
      )
    }
}

  const styles = StyleSheet.create({
     pinButton: {
          flexDirection: 'row',
          backgroundColor: '#800000',
          padding: 8,
          borderRadius: 6,
          justifyContent: 'space-around',
          width: 60
      },
      pinButtonText: {
          color: 'white'
      },
  })