import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './stack-navigator';
import {MarketDataScreen} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="IPTracker" component={StackNavigator} />
      <Screen name="MarketData" component={MarketDataScreen} />
    </Navigator>
  );
};

export default TabNavigator;
