import React, { useState } from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';



const SendMoney_Friend = ({ navigation }) => {



    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('AddFriends_Card');
                }}><Appbar.BackAction style={{ color: 'black', }} /></TouchableOpacity>
                <Appbar.Content style={{ alignItems: 'center' }} title="Send Money" />
                <View style={{ display: 'flex', flexDirection: 'row', right: 10 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CardImage');
                    }}>
                        <View >
                            <Icon name="cross" size={30} color="black" />
                        </View>
                    </TouchableOpacity>

                </View>

            </Appbar.Header>
            <View style={{ top: 10, alignSelf: 'center' }}>
                <TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View >
                            <Iconn name="lock" size={20} color="#715DFF" />
                        </View>
                        <Text style={{ color: '#715DFF' }}>Data Protection</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', }}>
                <View style={{ left: 50, top: 20 }}>
                    <Text style={{ fontSize: 20 }}>
                        Recipient
                </Text>
                </View>
                <View style={{ display: 'flex', top: 30, left: 30, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 50, width: 80, left: 30 }}>
                        <Text >
                            Kelly Cruz star_kellyJ
                    </Text>
                    </View>
                </View>
                <View style={{ top: 30, left: 20 }}>
                    <Text style={{ fontSize: 20 }}>
                        User Id
                    </Text>
                    <TextInput

                        style={{ width: '90%', paddingHorizontal: 10, right: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                        placeholder="223"
                        onChangeText={
                            (value) => setcardname(value)

                        }

                    />

                    <Text style={{ fontSize: 20 }}>
                        Amount
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput

                            style={{ width: '20%', paddingHorizontal: 10, right: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                            placeholder="EUR"
                            onChangeText={
                                (value) => setcardname(value)

                            }

                        />
                        <TextInput

                            style={{ width: '70%', paddingHorizontal: 10, right: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                            placeholder="120,00"
                            onChangeText={
                                (value) => setcardname(value)

                            }

                        />
                    </View>
                </View>
            </View>
            <View style={{ top: 150 }}>
                <TouchableOpacity style={{ marginTop: 40, marginBottom: 10, left: 40 }}>
                    <Text style={{ color: '#4D7099' }}>Read Privacy Policy and Terms & Conditions</Text>
                </TouchableOpacity>
                <View style={{ top: 0, backgroundColor: '#715DFF', left: 20, height: 40, width: '85%', borderRadius: 20, }}>
                    <TouchableOpacity

                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'white' }}>Send</Text>

                    </TouchableOpacity>
                </View>
            </View>
            <BottomTabs />
        </View>
    );
};
export default SendMoney_Friend;
