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
  Button
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';



const CardInformationFirst = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [cardname, setcardname] = useState('');
  const [billingAddress, setbillingAddress] = useState('');
  const [cardholder, setcardholder] = useState('');
  const [validate, setvalidate] = useState('')
  const checkTextInput = () => {
    //Check for the CardName TextInput
    if (cardname == "") {
      alert('Please Enter Card Name');
      return;
    }
    //Check for the cheked
    if (checked == "") {
      alert('Please make sure checked');
      return;
    }
    //Check for the chekedd
    if (checkedd == "") {
      alert('Please make sure checked');
      return;
    }
    //Check for the billingadress
    if (billingAddress == "") {
      alert('Please Enter Billing Adress');
      return;
    }
    //Check for the cardholder
    if (cardholder == "") {
      alert('Please Enter Card Holder');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    navigation.navigate('CardImage')
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>

        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction onPress={() => {
            navigation.navigate('CardInformation');
          }} />
          <Appbar.Content style={{ alignItems: 'center' }} title="Card Information" />
          <TouchableOpacity>
            <Appbar.Action icon="dots-vertical" />
          </TouchableOpacity>

        </Appbar.Header>
        <View style={{ top: 10, alignSelf: 'center' }}>
          <TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View >
                <Icon name="lock" size={20} color="#715DFF" />
              </View>
              <Text style={{ color: '#715DFF' }}>Data Protection</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ left: 20, top: 10 }}>
          <View><Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5, color: '#4D7099' }}>Card Name <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput

              style={{ width: '90%', paddingHorizontal: 10, borderWidth: 1, borderRadius: 20, fontSize: 10 }}
              placeholder="gigaaa smart card"
              onChangeText={
                (value) => setcardname(value)
              }
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);

              }}
            />

            <Text style={{ top: 10 }}>Mark as my default payment method </Text>
          </View>


          <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5, color: '#4D7099' }}>Billing Address<Text style={{ color: 'red' }}>*</Text></Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Checkbox
              status={checkedd ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckedd(!checkedd);
              }}
            />

            <Text style={{ top: 10 }}>Use my billing address from my profile </Text>
          </View>
          <View>
            <TextInput
              style={{ width: '90%', paddingHorizontal: 10, borderWidth: 1, borderRadius: 20, fontSize: 10 }}
              placeholder="Via garibaldi 12,20159 Milano MI"
              onChangeText={
                (value) => setbillingAddress(value)
              }
            />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5, color: '#4D7099' }}>Card Holder<Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              style={{ marginBottom: 50, width: '90%', paddingHorizontal: 10, borderWidth: 1, borderRadius: 20, fontSize: 10 }}
              placeholder="John Doe"
              onChangeText={
                (value) => setcardholder(value)
              }

            />
          </View>
        </View>
        <View style={{ backgroundColor: '#715DFF', height: 40, left: 30, width: '85%', borderRadius: 20, }}>


          <TouchableOpacity style={{ alignItems: 'center', height: '100%', width: '100%', justifyContent: 'center' }}

            onPress={
              checkTextInput}>
            <Text style={{ color: 'white', }}>Next</Text>

          </TouchableOpacity>




        </View>


      </ScrollView>
      <BottomTabs />
    </View>
  );
};
export default CardInformationFirst;
