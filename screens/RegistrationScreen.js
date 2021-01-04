import React from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView
} from 'react-native';
import Styles from '../assets/styling/Style.js'
const RegistrationScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.heading}>
                <Text style={{ fontSize: 20, color: '#800080' }}>Registration</Text>
            </View>
            <View style={Styles.login}>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="firstname" />
                        </View>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="LastName" />
                        </View>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="ContactNo" />
                        </View>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="Email" />
                        </View>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="Pasword" />
                        </View>
                        <View style={Styles.textinputregist}>
                            <TextInput placeholder="ConfirmPasword" />
                        </View>
                        <TouchableOpacity style={Styles.register}
                            onPress={() => {
                                navigation.navigate('LoginScreen');
                            }}
                        >

                            <Text style={Styles.textbtn}>Register</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

            </View>
        </View>
    )
}

export default RegistrationScreen
