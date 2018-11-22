import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Send extends Component{
    render() {
        return(
            <View>
                <Icon name="ios-send" size={25} />
            </View>
        )
    }
}

export default Send;