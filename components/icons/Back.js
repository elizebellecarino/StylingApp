import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Back extends Component{
    render() {
        return(
            <View>
                <Icon name="md-arrow-back" size={25} />
            </View>
        )
    }
}

export default Back;