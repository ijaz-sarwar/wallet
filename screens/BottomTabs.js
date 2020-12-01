import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from 'react-native';
import Iconn from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Feather';
 const BottomTabs =()=> {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          width: 70,
          height: 50,
          borderRadius: 35,
          bottom: 35,
          zIndex: 10,
        }}>
        <View style={[styles.button, styles.actionBtn]}>
         
            <TouchableOpacity  onPress={() => {
              Alert.alert('fingerclicked');
            }}>
              
              <Iconn
                style={{width: 60, padding: 10, height: 60}}
                size={40}
                name="md-finger-print-sharp"
              />
             
            </TouchableOpacity>
            </View>
          
       
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: 2,
          radius: 3,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          x: 0,
          y: 0,
          style: {marginVertical: 5},
          bottom: 0,
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          
            onPress={() => {
              Alert.alert('click');
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../images/home.png')}

              // source={{
              //   uri:
              //     'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png',
              // }}
              onPress={() => {
                Alert.alert('');
              }}></Image>
          </TouchableOpacity>
          <Text style={{justifyContent: 'center',fontSize:10,color:'#4C749C', alignItems: 'center'}}>
            Home
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginStart: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
            <Iconn
              name="person"
              size={20}
              color="#4C749C"
              onPress={() => {
                Alert.alert('click');
              }}
            />
          </TouchableOpacity>
          <Text style={{justifyContent: 'center',color:'#4C749C', fontSize:10, alignItems: 'center'}}>
            Social
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginStart: 85,
            justifyContent:'center' 
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
            <Icon
              name="message-circle"
              size={20}
              color="#4C749C"
              onPress={() => {
                Alert.alert('click');
              }}
              style={{marginHorizontal: 16,}}
              containerStyle={{marginHorizontal: 16}}
            />
          </TouchableOpacity>
          <Text style={{justifyContent: 'center', color:'#4C749C', fontSize:10, alignItems: 'center'}}>
            Message
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
            <Iconn
              name="ios-wallet-outline"
              size={20}
              color="#4C749C"

              style={{marginHorizontal: 16,}}
              containerStyle={{marginHorizontal: 16}}
            />
          </TouchableOpacity>
          <Text style={{justifyContent: 'center',fontSize:10, color:'#4C749C', alignItems: 'center'}}>
            Wallet
          </Text>
        </View>

        {/* </View> */}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: '#1E90FF',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
