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
import Icon from 'react-native-vector-icons/dist/Entypo';
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
                        <View style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', marginTop: 20, width: "90%", borderRadius: 10, borderWidth: 2 }}>
                            <TextInput placeholder="Pasword" style={{ alignSelf: 'center', width: '88%' }} />

                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Icon name="eye" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', marginTop: 20, width: "90%", borderRadius: 10, borderWidth: 2 }}>
                            <TextInput placeholder="Pasword" style={{ alignSelf: 'center', width: '88%' }} />

                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Icon name="eye" size={30} color="black" />
                            </TouchableOpacity>
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
