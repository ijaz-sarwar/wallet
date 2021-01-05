import React from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
} from 'react-native';

import { Container, Header, Content, Form, Item, Label } from 'native-base';
import Styles from '../assets/styling/Style.js';
import Icon from 'react-native-vector-icons/dist/Entypo';
const LoginScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.heading}>
                <Text style={Styles.text}>LogIn</Text>
            </View>
            <View style={Styles.login}>
                <Container style={Styles.login}>
                    <Content>
                        <Form>
                            <View style={Styles.inputt}>
                                <TextInput placeholder="UserName" style={{ alignSelf: 'center', width: '90%' }} />
                            </View>
                            <View style={Styles.inputt}>
                                <TextInput placeholder="Pasword" style={{ alignSelf: 'center', width: '88%' }} />

                                <TouchableOpacity style={{ alignSelf: 'center', }}>
                                    <Icon name="eye" size={30} color="black" />
                                </TouchableOpacity>
                            </View>

                            <View style={Styles.button}>
                                <TouchableOpacity style={Styles.register}
                                    onPress={() => {
                                        navigation.navigate('RegistrationScreen');
                                    }}
                                >
                                    <Text style={Styles.textbtn}>Rigistration</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('CardItem');
                                    }}
                                    style={Styles.loginbtn}>
                                    <Text style={Styles.textbtn}>Login</Text>
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('TimeStamp');
                                }}
                                style={Styles.stampbtn}>
                                <Text style={Styles.textbtn}>TimeStamp</Text>
                            </TouchableOpacity>
                        </Form>
                    </Content>
                </Container>
            </View>
        </View>
    )
}

export default LoginScreen
