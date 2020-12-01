import React from 'react';
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
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
const AddFriends_Card = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>


            <Appbar.Header style={{ backgroundColor: 'white' }}>

                <Appbar.Content style={{ alignItems: 'center' }} title="Friends" />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('CardImage');
                }}>
                    <View >
                        <Icon name="cross" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </Appbar.Header>
            <View style={{ display: 'flex', flexDirection: 'row', top: 10 }}>
                <TextInput

                    style={{ width: '90%', paddingHorizontal: 10, left: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                    placeholder="Search for Name, Surname and Username"
                    onChangeText={
                        (value) => setcardname(value)

                    }

                />
                <TouchableOpacity>
                    <Iconn name="search1" style={{ top: 10, right: 30 }} size={30} color="black" />
                </TouchableOpacity>
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

                <View style={{ height: 40, width: 100, backgroundColor: '#715DFF', left: 140, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SendMoney_Friend');
                    }}>
                        <Text style={{ alignSelf: 'center' }}>Select</Text>

                    </TouchableOpacity>
                </View>
            </View>

            <BottomTabs />
        </View>
    );
}

export default AddFriends_Card;