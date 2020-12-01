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
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
const CardInformationScan = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>


            <Appbar.Header style={{ backgroundColor: 'white' }}>

                <Appbar.Content style={{ alignItems: 'center' }} title="Add Card" />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('CardImage');
                }}>
                    <View >
                        <Icon name="cross" size={30} color="black" />
                    </View>
                </TouchableOpacity>

            </Appbar.Header>

            <View style={{ alignItems: 'center', justifyContent: 'center', top: 50 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Scan the front side
                    </Text>
                <TouchableOpacity>
                    <Card style={{ height: 250, top: 10, width: 380, backgroundColor: '#FFFFFF', borderRadius: 20 }}>

                    </Card>
                </TouchableOpacity>

                <View style={{ top: 190 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('CardInformation');
                        }}>
                        <Text style={{ color: '#715DFF' }}>
                            or Add Card Manually
                            </Text>
                        <View
                            style={{
                                borderBottomColor: '#715DFF',
                                borderBottomWidth: 1,
                            }}
                        />
                    </TouchableOpacity>

                </View>

            </View>



            <BottomTabs />
        </View>
    );
}

export default CardInformationScan;