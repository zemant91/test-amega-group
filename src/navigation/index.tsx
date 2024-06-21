import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './bottom-tab-navigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
