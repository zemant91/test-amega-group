import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Charts from './components/Charts.tsx';

const MarketDataScreen = () => {
  return (
    <SafeAreaView>
      <Charts />
    </SafeAreaView>
  );
};

export default MarketDataScreen;
