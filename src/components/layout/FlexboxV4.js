import React from 'react'
import { View, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>            
            <View style={style.V1}/>
            <View style={style.V2}/>
            </View>
       
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor:  '#000',
    },

    V0: {
        backgroundColor: '#600',
        height: 330, //utilizando de forma estatica parte do flex container

    },
    V1: {
        backgroundColor: '#ff801a',        //dois elementos na memsa linha e a mesma prioridade , vao crescer iguais no flexgrow
        flexGrow: 9,
    },

    V2: {
        backgroundColor: '#dd80c1',
        flexGrow: 1,
    },

})