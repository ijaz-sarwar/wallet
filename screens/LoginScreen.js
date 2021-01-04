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

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Styles from '../assets/styling/Style.js'
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
                            <Item floatingLabel>
                                <Label style={Styles.label}>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={Styles.label}>Password</Label>
                                <Input />
                            </Item>
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

                        </Form>
                    </Content>
                </Container>
            </View>
        </View>
    )
}

export default LoginScreen
