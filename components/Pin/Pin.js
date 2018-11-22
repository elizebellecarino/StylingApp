import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import UtilityNavButton from '../UtilityNavButton/UtilityNavButton'
import Button from '../Button/Button'
import LocalImage from '../LocalImage/LocalImage'

let windowWidth = Dimensions.get('window').width

export default class Pin extends Component {
    render() {
      return (
        <View style={[styles.pinContainer, {width: windowWidth/this.props.columns}]}>

          <View style={styles.pinHeader}>
            <View style={styles.utilityNav}>
              <UtilityNavButton icon= 'Back' />
              <UtilityNavButton icon= 'Heart' />
              <UtilityNavButton icon= 'Send' />
              <UtilityNavButton icon= 'More' />
          </View>
            <View style={styles.pinButtonContainer}>
              <Button red icon text= 'Save' />
            </View>
          </View>
            
            <View style={styles.pinContent}>
              <LocalImage 
                source={this.props.pinsource.imageSource} 
                originalWidth={this.props.pinsource.originalWidth}
                originalHeight={this.props.pinsource.originalHeight}
                columns={this.props.columns}
                columns={this.props.columns}
                />
            </View>

            <View style={styles.pinMeta}>
              <View style={styles.pinMetaTextContainer}>
                <Text style={styles.pinMetaText}>Saved from</Text>
                <Text style={[styles.pinMetaText,styles.textBold]}>website.com</Text>
              </View>
              <View style={styles.pinButtonContainer}>
              <Button text= 'Visit' />
            </View>
            </View>
            
            <View style={styles.pinUser}>
              <View style={styles.pinUserAvatar}>
              </View>
              <View style={styles.pinUserContainer}>
                <Text style={styles.pinUserText}>
                  <Text style={styles.textBold}>User Name</Text> saved to<Text style={styles.textBold}> Space</Text>
                </Text>
                <Text style={styles.pinUserText}>Lorem Ipsum</Text> 
              </View>
            </View>
        
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      pinContainer: {
          //flex: 1,
          //alignSelf: 'stretch',
          
      },
      pinHeader: {
          backgroundColor:'white',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flex: 1,
          minHeight: 50,
          padding: 8
      },
      utilityNav: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1
      },
      pinButton: {
          flexDirection: 'row',
          backgroundColor: '#800000',
          padding: 8,
          borderRadius: 6,
          justifyContent: 'space-between',
          width: 60
      },
      pinButtonText: {
          color: 'white'
      },
      pinButtonContainer: {
          flex: 1,
          alignItems: 'flex-end'
      },
      pinContent: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8
      },
      imagePlaceholder: {
         flex: 1,
         backgroundColor: 'black',
         alignSelf: 'stretch',
         borderRadius: 6
      },
      pinMeta: {
          flex: 1,
          minHeight: 70,
          flexDirection: 'row',
          paddingTop: 16,
          paddingRight: 8,
          paddingBottom: 8,
          paddingLeft: 8
      },
      pinMetaTextContainer: {
          
      },
      utilityButton: {
          backgroundColor: '#808080',
          alignItems: 'center',
          justifyContent: 'center'
      },
      utilityButtonText: {
          color: 'black',
          fontWeight: 'bold'
      },
      pinUserContainer: {
         
      },
      pinUser: {
          flex: 5,
          flexDirection: 'row',
          paddingLeft: 8,
          paddingRight: 8
      },
      pinUserAvatar: {
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'black',
          marginRight: 8
      },
      textBold: {
          fontWeight: 'bold'
      }
  })