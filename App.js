import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import GigaSharesInfo from './screens/GigaSharesInfo';
import CardImage from './screens/CardImage';
import CardList from './screens/CardList';
import DebitCardDetail from './screens/DebitCardDetail';
import TebBankDetail from './screens/TebBankDetail';
import NutsAccount from './screens/NutsAccount';
import BitCoinDetail from './screens/BitCoinDetail';
import DebitCardInputInfo from './screens/DebitCardInputInfo';
import CardInformation from './screens/CardInformation';
import CardInformationDate from './screens/CardInformationDate';
import CardInformationFirst from './screens/CardInformationFirst';

import BottomTabs from './screens/BottomTabs';
import CardInformationScan from './screens/CardInformationScan';
import AddFriends_Card from './screens/AddFriends_Card';
import SendMoney_Friend from './screens/SendMoney_Friend';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>


        <Stack.Screen name="CardImage" component={CardImage} />
        <Stack.Screen name="GigaSharesInfo" component={GigaSharesInfo} />
        <Stack.Screen name="CardList" component={CardList} />
        <Stack.Screen name="DebitCardDetail" component={DebitCardDetail} />
        <Stack.Screen name="TebBankDetail" component={TebBankDetail} />
        <Stack.Screen name="NutsAccount" component={NutsAccount} />
        <Stack.Screen name="BitCoinDetail" component={BitCoinDetail} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="CardInformationScan" component={CardInformationScan} />
        <Stack.Screen name="AddFriends_Card" component={AddFriends_Card} />
        <Stack.Screen name="SendMoney_Friend" component={SendMoney_Friend} />
        <Stack.Screen
          name="DebitCardInputInfo"
          component={DebitCardInputInfo}
        />


        {/* <Stack.Screen name="GigaSharesInfoEdit" component={GigaSharesInfoEdit} />

<Stack.Screen name="DebitCardDetailEdit" component={DebitCardDetailEdit} />
        <Stack.Screen name="TebBankDetailEdit" component={TebBankDetailEdit} />
        <Stack.Screen name="NutsAccountEdit" component={NutsAccountEdit} />
        <Stack.Screen name="BitCoinDetailEdit" component={BitCoinDetailEdit} />

        <Stack.Screen
           name="DebitCardInputInfo"  component={DebitCardInputInfo}
        /> */}






        <Stack.Screen name="CardInformation" component={CardInformation} />
        <Stack.Screen
          name="CardInformationFirst"
          component={CardInformationFirst}
        />

        <Stack.Screen
          name="CardInformationDate"
          component={CardInformationDate}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
