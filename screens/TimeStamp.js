import React, { useState, useEffect } from 'react';


import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const TimeStamp = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Current Date Time
          </Text>
                    <Text style={styles.textStyle}>
                        {currentDate}
                    </Text>
                </View>


            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
    },
});

export default TimeStamp;