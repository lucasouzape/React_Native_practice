import React from 'react'
import { View, StyleSheet } from 'react-native'


export default props => {
    const lado = 80
    return (
        <View style={{
            height: lado,
            width: lado,
            
            backgroundColor: props.cor || '#090'
        }} />
    )
}