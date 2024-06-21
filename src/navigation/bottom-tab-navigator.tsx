import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './stack-navigator';
import {MarketDataScreen} from '../screens';
import screens from "../constants/navigation";
import {RootBottomTabNavigatorParamList} from "../types/navigation";

const {Navigator, Screen} = createBottomTabNavigator<RootBottomTabNavigatorParamList>();

const TabNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={screens.IP_TRACKER_STACK} component={StackNavigator} />
      <Screen name={screens.MARKET_DATA} component={MarketDataScreen} />
    </Navigator>
  );
};

export default TabNavigator;
