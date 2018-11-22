import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Thumbtack extends Component{
    render() {
        return(
            <View>
                <Icon name="thumbtack" size={22} color='white' />
            </View>
        )
    }
}

export default Thumbtack;