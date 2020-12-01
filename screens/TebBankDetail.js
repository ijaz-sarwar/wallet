import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
const image = require('../images/tebbankaccount.png');
const TebBankDetail = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>

      <Appbar.Header style={{ backgroundColor: 'white' }}>
        <Appbar.BackAction onPress={() => {
          navigation.navigate('CardList');
        }} />
        <Appbar.Content style={{ alignItems: 'center' }} title="gigaaa Smart Card" />
        <TouchableOpacity>
          <Appbar.Action icon="dots-vertical" />
        </TouchableOpacity>

      </Appbar.Header>
      <ScrollView>
        <Text style={{ top: 10, alignSelf: 'center', fontWeight: 'bold', color: 'skyblue' }}>Cards</Text>
        <View style={{ top: 20, alignSelf: 'center' }}>

          <ImageBackground source={image} style={{ height: 250, width: 350, }} >
            <View style={{ left: 5, top: 10 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>TEB Euro Account</Text>
              <Text style={{ color: 'white', fontSize: 18 }}>016100000000003922</Text>
              <Text style={{ color: 'white', bottom: 40, fontWeight: 'bold', fontSize: 30, right: 30, textAlign: 'right' }}>TEB</Text>
            </View>
            <View style={{ top: 100, left: 5 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>177,40</Text>
              <Text style={{ color: 'white', fontSize: 15 }}>Euros</Text>
            </View>
          </ImageBackground>


        </View>
        <View style={{ top: 30, alignSelf: 'center', width: '95%', borderRadius: 20, }}>
          <View style={{ backgroundColor: '#715DFF', borderRadius: 20, height: 40, alignItems: 'center', }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('AddFriends_Card');
            }} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ color: 'white', top: 10 }}>Send Money</Text>

            </TouchableOpacity>
          </View>
          <Text style={{ padding: 10, fontWeight: 'bold', marginBottom: 10, alignSelf: 'center', color: '#4D7099' }}>Last Transactions</Text>
          <View style={{ bottom: 20 }}>
            <View style={{ padding: 10 }}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'green' }}>+80.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  12:51</Text>

            </View>
            <View style={{ padding: 10, bottom: 20 }}>
              <Text>Bancomat Cash Withdrawl</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'grey' }}>-50.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  11:00</Text>
            </View>
            <View style={{ padding: 10, bottom: 30 }}>
              <Text>POS Payment Agora AVM</Text>
              <Text style={{ color: 'red' }}>Declined</Text>
              <Text style={{ textAlign: 'right', bottom: 40, color: 'pink' }}>-124.99€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  12:51</Text>

            </View>
            <View style={{ padding: 10, bottom: 60 }}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'grey' }}>-50.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  11:00</Text>

            </View>
            <View style={{ padding: 10, bottom: 60 }}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'grey' }}>-50.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  11:00</Text>

            </View>
            <View style={{ padding: 10, bottom: 60 }}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'grey' }}>-50.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  11:00</Text>

            </View>
            <View style={{ padding: 10, bottom: 60 }}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{ textAlign: 'right', bottom: 20, color: 'grey' }}>-50.00€</Text>
              <Text style={{ color: '#A6A8BA', bottom: 10 }}>13 April 2017  11:00</Text>

            </View>
          </View>
        </View>
      </ScrollView>
      <BottomTabs />
    </View>
  );
};
export default TebBankDetail;
