import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Back, Heart, More, Send } from '../icons'

export default class UtilityNavButton extends Component {
    render() {
      switch(this.props.icon) {
          case 'Back':
            return <Back />
          case 'Heart':
            return <Heart />
          case 'Send':
            return <Send />
          case 'More':
            return <More />
          default: 
          return 'No Icon'
      }
        
    }
  }

  