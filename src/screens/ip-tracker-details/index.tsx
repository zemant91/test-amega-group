import React from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import IPInfoBlock from "../ip-tracker/components/IPInfoBlock.tsx";
import { useRoute } from "@react-navigation/native";
import { IPTrackerDetailsRoute } from "../../types/navigation.ts";

const IpTrackerDetailsScreen = () => {
  const {params: {ipInfo, image}} = useRoute<IPTrackerDetailsRoute>();
  const {width: screenWidth} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: screenWidth, height: 300}}/>
      <IPInfoBlock ipInfo={ipInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
})

export default IpTrackerDetailsScreen;
