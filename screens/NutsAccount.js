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
const image=require('../images/nutsAccounts.png');
const NutsAccount = ({navigation}) => {
  return (
    <View style={{flex:1}}>
  
    <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
     
    </Appbar.Header>
    <ScrollView>
   <Text style={{top:10,textAlign:'center',fontWeight:'bold',color:'skyblue'}}>Cards</Text>
   
     <View style={{bottom:20,}}>
     <View style={{justifyContent:'center',  marginHorizontal:5, top:40}}>
       
      <ImageBackground source ={image}style={{height:250,width:'100%',}} >
          <View style={{left:5,top:10}}>
          <Text style={{color:'white',fontSize:18}}>gigaaa Nuts Account</Text>
          <Text style={{color:'white',fontSize:18}}>UserID 222</Text>
          
          </View>
          <View style={{top:100,left:5}}>
            <Text style={{color:'white',fontSize:18}}>93298</Text>
            <Text style={{color:'white',fontSize:15}}>Nuts</Text>
          </View>
          </ImageBackground>
     
     
     </View>
     <View style={{top:60,alignSelf:'center',width:'95%',}}>
    <View style={{backgroundColor:'#715DFF',borderRadius:20,height:40}}>
     <TouchableOpacity style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white',top:10}}>Send Nuts</Text>
         
     </TouchableOpacity>
     </View>
 <Text style={{padding:10,fontWeight:'bold',marginBottom:10, alignSelf:'center',color:'#4D7099'}}>Last Transactions</Text>
     <View style={{bottom:20}}>
     <View style={{padding:10}}>
         <Text>Transfer to UserID 77</Text>
         <Text style={{textAlign:'right',bottom:20,color:'green'}}>-666  Nuts</Text>
         <Text style={{color:'#A6A8BA',bottom:20}}>13 April 2017  12:51</Text>
        </View>
        <View style={{padding:10,bottom:30}}>
         <Text>Transfer to UserID 77</Text>
         <Text style={{textAlign:'right',bottom:20,color:'green'}}>-666  Nuts</Text>
         <Text style={{color:'#A6A8BA',bottom:20}}>13 April 2017  12:51</Text>
        </View>
        <View style={{padding:10,bottom:50}}>
         <Text>Transfer to UserID 77</Text>
         <Text style={{textAlign:'right',bottom:20,color:'green'}}>-666  Nuts</Text>
         <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
        </View>
        <View style={{padding:10,bottom:60}}>
         <Text>Transfer to UserID 77</Text>
         <Text style={{textAlign:'right',bottom:20,color:'green'}}>-666  Nuts</Text>
         <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
        </View>
        <View style={{padding:10,bottom:80}}>
         <Text>Transfer to UserID 77</Text>
         <Text style={{textAlign:'right',bottom:20,color:'green'}}>-666  Nuts</Text>
         <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
        </View>
        </View>
   </View>
  </View>
   </ScrollView>
   <BottomTabs/>
   </View>
  
  );
};
export default NutsAccount;
