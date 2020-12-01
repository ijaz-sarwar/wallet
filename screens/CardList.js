import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import BottomTabs from './BottomTabs';

import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
const image=require('../images/debitCard.png');
const image1=require('../images/tokenizedAssets.png');
const image2=require('../images/tebbankaccount.png');
const image3=require('../images/bitCoin.png');
const image4=require('../images/nutsAccounts.png');
const CardList = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <ScrollView>

      <View style={{width:'100%', marginTop:10,paddingTop:10, flexDirection:'column'}}>

      <View style={{ paddingHorizontal:3,width:deviceWidth,flexDirection:'row'}}>




<View style={{width:"47%",marginHorizontal:5}} >
      <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Debit Card/Credit Card</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('DebitCardDetail')}}>
         <View style={{width:'100%', }}>
           <ImageBackground source ={image}style={{height:120, width:"100%"}} >
               <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>BNL Prepaid Card</Text>
               <Text style={{color:'white',fontSize:8}}>***8520  05/21</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>2,93</Text>
                 <Text style={{color:'white',fontSize:8}}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>

</View>

<View style={{width:"47%", marginHorizontal:5}} >


          <Text style={{fontWeight:'bold',fontSize:10, left:10}}>Tokenized Assets(Giga Share)</Text>
           <TouchableOpacity  onPress={() => {
                navigation.navigate('GigaSharesInfo');
              }}>
         <View style={{width:'100%',}}>
           <ImageBackground source ={image1}style={{height:120,width:"100%"}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>Giga Shares</Text>
               <Text style={{color:'white',fontSize:8}}>Giga International S.A</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>300.000</Text>
                 <Text style={{color:'white',fontSize:8}}>Pieces</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:40 }}>20,000</Text>
                 <Text style={{color:'white',fontSize:12,textAlign: 'right',right:10,bottom:40 }}>Euros</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:40 }}>8.86 Euros/Share</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>

</View>


      </View>



      <View style={{ paddingHorizontal:3,width:deviceWidth,flexDirection:'row',marginTop:15}}>




<View style={{width:"47%",marginHorizontal:5}} >
<Text style={{fontWeight:'bold',fontSize:10,left:10}}>Bank Accounts</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('TebBankDetail')}}>
        <View style={{width:'100%',}}>
          
           <ImageBackground source ={image2}style={{height:120,width:"100%"}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>TEB Euro Account</Text>
               <Text style={{color:'white',fontSize:6}}>016100000000003922</Text>
               <Text style={{color:'white',bottom:20, fontWeight:'bold',right:20, textAlign:'right'}}>TEB</Text>
               </View>
               <View style={{top:40,left:5,display:'flex'}}>
                 <Text style={{color:'white',fontSize:12}}>177,40</Text>
                 <Text style={{color:'white',fontSize:8}}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>

</View>

<View style={{width:"47%", marginHorizontal:5}} >


          


          <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Crypto Wallet(Bit Coin)</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('BitCoinDetail')}}>
         <View >
          
           <ImageBackground source ={image3}style={{ height:120,width:"100%"}} >
           <View style={{left:2,top:10}}>
               <Text style={{color:'white',fontSize:8}}>BitCoin Wallet</Text>
               <Text style={{color:'white',fontSize:8}}>[Public Address]</Text>
               </View>
               <View style={{top:50,left:2}}>
                 <Text style={{color:'white',fontSize:12}}>0,019</Text>
                 <Text style={{color:'white',fontSize:8}}>BTC</Text>
                 <Text style={{color:'white',fontSize:12,textAlign: 'right',right:10,bottom:30 }}>240</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:30 }}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>

</View>












      </View>





      <View style={{ paddingHorizontal:3,width:deviceWidth,flexDirection:'row',marginTop:15}}>




<View style={{width:"47%",marginHorizontal:5}} >
<Text style={{fontWeight:'bold',fontSize:10,left:10}}>Nuts Accounts</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('NutsAccount')}}>
         <View style={{width:'100%',}}>
          
           <ImageBackground source ={image4}style={{height:130,width:"100%"}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>gigaaa Nuts Account</Text>
               <Text style={{color:'white',fontSize:8}}>UserID 222</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>93298</Text>
                 <Text style={{color:'white',fontSize:8}}>Nuts</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>

</View>











      </View>








    </View>
     {/* <View style={{top:30,padding:5,paddingTop:10, flexDirection:'row',flexWrap:'wrap'}}>
       <View style={{paddingTop:10}}>
           <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Debit Card/Credit Card</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('DebitCardDetail')}}>
         <View style={{width:'50%', padding:10}}>
           <ImageBackground source ={image}style={{height:120, width:180}} >
               <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>BNL Prepaid Card</Text>
               <Text style={{color:'white',fontSize:8}}>***8520  05/21</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>2,93</Text>
                 <Text style={{color:'white',fontSize:8}}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>
       </View>
       <View style={{paddingTop:10}}>
           <Text style={{fontWeight:'bold',fontSize:10, left:10}}>Tokenized Assets(Giga Share)</Text>
           <TouchableOpacity  onPress={() => {
                navigation.navigate('GigaSharesInfo');
              }}>
         <View style={{width:'50%',padding:10}}>
           <ImageBackground source ={image1}style={{height:120,width:180}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>Giga Shares</Text>
               <Text style={{color:'white',fontSize:8}}>Giga International S.A</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>300.000</Text>
                 <Text style={{color:'white',fontSize:8}}>Pieces</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:40 }}>20,000</Text>
                 <Text style={{color:'white',fontSize:12,textAlign: 'right',right:10,bottom:40 }}>Euros</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:40 }}>8.86 Euros/Share</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>
       </View>
       <View style={{paddingTop:30}}>
           <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Bank Accounts</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('TebBankDetail')}}>
         <View style={{width:'50%',padding:10}}>
          
           <ImageBackground source ={image2}style={{height:120,width:180}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>TEB Euro Account</Text>
               <Text style={{color:'white',fontSize:6}}>016100000000003922</Text>
               <Text style={{color:'white',bottom:20, fontWeight:'bold',right:20, textAlign:'right'}}>TEB</Text>
               </View>
               <View style={{top:40,left:5,display:'flex'}}>
                 <Text style={{color:'white',fontSize:12}}>177,40</Text>
                 <Text style={{color:'white',fontSize:8}}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>
       </View>
       <View style={{paddingTop:30}}>
           <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Crypto Wallet(Bit Coin)</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('BitCoinDetail')}}>
         <View style={{width:'50%',padding:10}}>
          
           <ImageBackground source ={image3}style={{height:120,width:180}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>BitCoin Wallet</Text>
               <Text style={{color:'white',fontSize:8}}>[Public Address]</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>0,019</Text>
                 <Text style={{color:'white',fontSize:8}}>BTC</Text>
                 <Text style={{color:'white',fontSize:12,textAlign: 'right',right:10,bottom:30 }}>240</Text>
                 <Text style={{color:'white',fontSize:8,textAlign: 'right',right:10,bottom:30 }}>Euros</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>
       </View>
       <View style={{paddingTop:30}}>
           <Text style={{fontWeight:'bold',fontSize:10,left:10}}>Nuts Accounts</Text>
           <TouchableOpacity onPress={()=> {navigation.navigate('NutsAccount')}}>
         <View style={{width:'50%',padding:10}}>
          
           <ImageBackground source ={image4}style={{height:130,width:190}} >
           <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:8}}>gigaaa Nuts Account</Text>
               <Text style={{color:'white',fontSize:8}}>UserID 222</Text>
               </View>
               <View style={{top:50,left:5}}>
                 <Text style={{color:'white',fontSize:12}}>93298</Text>
                 <Text style={{color:'white',fontSize:8}}>Nuts</Text>
               </View>
               </ImageBackground>
          </View> 
          </TouchableOpacity>
       </View>

     </View>
      */}
     </ScrollView>

     <BottomTabs/>

     </View>
  );
};
export default CardList;
