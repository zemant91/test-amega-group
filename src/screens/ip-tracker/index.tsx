import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import IPTracker from './components/IPTracker';
import Slider from "./components/Slider";
import { IPInfo } from "../../types";

const IpTrackerScreen = () => {
  const [collectedIpInfo, setCollectedIpInfo] = React.useState<IPInfo>();
  const collectIpInfo = (ipInfo: IPInfo) => {
    setCollectedIpInfo(ipInfo);
  }

  return (
    <SafeAreaView>
      <IPTracker collectIpInfo={collectIpInfo}/>
      <Slider ipInfo={collectedIpInfo}/>
    </SafeAreaView>
  );
};

export default IpTrackerScreen;
