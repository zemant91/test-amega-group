import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IpTrackerScreen, IpTrackerDetailsScreen} from '../screens';
import screens from '../constants/navigation.ts';

const {Navigator, Screen} = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator>
      <Screen name={screens.IP_TRACKER} component={IpTrackerScreen} />
      <Screen
        name={screens.IP_TRACKER_DETAILS}
        component={IpTrackerDetailsScreen}
      />
    </Navigator>
  );
};

export default StackNavigator;
