import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPInfo} from '../../../types';

interface IIPInfoBlock {
  ipInfo: IPInfo;
}

const IPInfoBlock: React.FC<IIPInfoBlock> = ({ipInfo}) => {
  return (
    <View>
      <Text style={styles.ipaddress}>IP Address: {ipInfo?.ip}</Text>
      <Text>ISP Provider: {ipInfo?.connection.isp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ipaddress: {marginBottom: 12},
});

export default IPInfoBlock;
