import React from 'react';
import { StyleSheet, Text, } from 'react-native';

const Style = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    login: {
        height: "80%",
        width: "95%",
        backgroundColor: '#800080',
        borderRadius: 30

    },
    heading: {
        height: 50, width: 130, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 10,
        borderColor: "#800080"
    },
    text: {
        color: '#800080', fontSize: 30
    },
    button: {
        justifyContent: "space-around", alignItems: 'center', marginTop: 10, flexDirection: 'row'
    },
    register: {
        borderColor: "black", borderWidth: 2, width: 150,
        height: 50, borderRadius: 10, alignItems: "center", justifyContent: 'center', marginTop: 10
    },
    loginbtn: {
        borderColor: "black", borderWidth: 2,
        width: 80, height: 50, borderRadius: 10,
        alignItems: 'center', justifyContent: 'center', marginTop: 10
    },
    textbtn: {
        fontSize: 20,
    },
    label: {
        color: 'black'
    },
    textinputregist: {
        width: "90%", height: 50,
        borderWidth: 2, margin: 10, borderRadius: 10
    }

})
export default Style;