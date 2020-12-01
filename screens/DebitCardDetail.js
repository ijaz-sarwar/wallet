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
const image=require('../images/debitCard.png');
const DebitCardDetail = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <ScrollView>
      <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
        <Text style={{top:10,alignSelf:'center',fontWeight:'bold',color:'skyblue'}}>Cards</Text>
          <View style={{top:20,alignSelf:'center'}}>
            
           <ImageBackground source ={image}style={{height:250, width:350,}} >
               <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:18}}>BNL Prepaid Card</Text>
               <Text style={{color:'white',fontSize:18}}>***8520  05/21</Text>
               </View>
               <View style={{top:130,left:5}}>
                 <Text style={{color:'white',fontSize:18}}>2,93</Text>
                 <Text style={{color:'white',fontSize:15}}>Euros</Text>
               </View>
               </ImageBackground>
          
          
          </View>
       
          <View style={{top:30,alignSelf:'center',width:'85%',}}>
         <View style={{backgroundColor:'blue',borderRadius:20,height:40}}>
          <TouchableOpacity onPress={()=> {navigation.navigate('DebitCardInputInfo')}} style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
        
              <Text style={{color:'white',top:10}}>Send Money</Text>
              
          </TouchableOpacity>
          </View>
      <Text style={{padding:10,fontWeight:'bold',alignSelf:'center',color:'darkblue'}}>Last Transactions</Text>
         <View style={{padding:10,bottom:20}}>
          <View style={{padding:1}}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{textAlign:'right',bottom:20,color:'green'}}>+80.00€</Text>
              <Text>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:1}}>
              <Text>Bancomat Cash Withdrawl</Text>
              <Text style={{textAlign:'right',bottom:30,color:'grey'}}>-50.00€</Text>
              <Text>13 April 2017  11:00</Text>
             </View>
             <View style={{padding:1}}>
              <Text>POS Payment Agora AVM</Text>
              <Text style={{textAlign:'right',bottom:30,color:'pink'}}>-124.99€</Text>
              <Text>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:1}}>
              <Text>Bancomat Cash Withdrawal</Text>
              <Text style={{textAlign:'right',bottom:30,color:'grey'}}>-50.00€</Text>
              <Text>13 April 2017  11:00</Text>
             
          </View>
          </View>
        </View>
        </ScrollView>
        <BottomTabs/>
        </View>
  );
};
export default DebitCardDetail;
