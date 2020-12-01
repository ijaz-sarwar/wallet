import React,{useState} from 'react';
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
import moment from 'moment';

import RNDateFormat from 'react-native-date-format';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import TebBankDetail from './TebBankDetail';
import { Appbar } from 'react-native-paper';
const image=require('../images/debitCard.png');


const CardInformation= ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Expdate, setExpdate] = useState('09/22')
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    let dat=date.toString();
    console.warn("A date has been picked: ", dat);
    let d=moment(dat).format('MM/yy');

    setExpdate(d);
    hideDatePicker();
  };
    
  return (
     <View style={{flex:1}}>
       <ScrollView>
      <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="Card Information" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
      
      <View style={{top:20}}>
           <TouchableOpacity>
         <View style={{display:'flex',alignSelf:'center',flexDirection:'row'}}>
           <View >
           <Icon  name="lock" size={20} color="#715DFF" />
           </View>
         <Text style={{color:'#715DFF'}}>Data Protection</Text>
       </View>
         </TouchableOpacity>
         </View>
         <View style={{left:20,top:30}}>
             <Text style={{fontWeight:'bold',fontSize:16,color:'#4D7099'}}>Card Number<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{width:'90%', borderWidth:1,borderRadius:20,paddingHorizontal:10, fontSize: 16}}  
                    placeholder="1249 2011 1041 4241"  
                     
                /> 
                </View>
                <View style={{left:20,top:30}}>
             <Text style={{fontWeight:'bold',fontSize:16,marginTop:5, paddingHorizontal:10, color:'#4D7099'}}>Expiration Date<Text style={{color:'red'}}>*</Text></Text>
           
           
           <TouchableOpacity
                               style={{paddingHorizontal:10, paddingVertical:5, width:'90%', borderWidth:1,borderRadius:20, fontSize: 16}}  
                               onPress={showDatePicker}

           >
<Text style={{color:'grey',fontSize:16,paddingVertical:8}}>{Expdate}</Text>

           </TouchableOpacity>
             {/* <TextInput  
            //  onPress={()=> }
            onPress={showDatePicker}
                    style={{width:'90%', borderWidth:1,borderRadius:20, fontSize: 16}}  
                    placeholder="09/22"  
                     
                />  */}
                 <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
                </View>

                <View style={{left:20,top:30}}>
             <Text style={{fontWeight:'bold',fontSize:16,marginTop:5, color:'#4D7099'}}>CCV<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{width:'90%',paddingHorizontal:10, borderWidth:1,borderRadius:20, fontSize: 16}}  
                    placeholder="041"  
                     
                /> 
                </View>
                <TouchableOpacity style={{marginTop:40,marginBottom:10, left:40}}>
         <Text style={{color:'#4D7099'}}>Read Privacy Policy and Terms & Conditions</Text>
         </TouchableOpacity>
         <View style={{top:0,backgroundColor:'#715DFF',left:20, height:40,width:'85%',borderRadius:20,}}>
     <TouchableOpacity
      onPress={() => {
              navigation.navigate('CardInformationFirst');
            }}
      style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white'}}>Add Payment Method</Text>
         
     </TouchableOpacity>
     </View>
     </ScrollView>
     <BottomTabs/>
    </View>
  );
};
export default CardInformation;
