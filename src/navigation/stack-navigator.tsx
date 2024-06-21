import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IpTrackerScreen, IpTrackerDetailsScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="IpTracker" component={IpTrackerScreen} />
      <Screen name="IpTrackerDetails" component={IpTrackerDetailsScreen} />
    </Navigator>
  );
};

export default StackNavigator;
