import screens from "../constants/navigation";
import { ImageSourcePropType } from "react-native";
import { IPInfo } from "./index.ts";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootBottomTabNavigatorParamList = {
  [screens.IP_TRACKER_STACK]: NativeStackScreenProps<StackParamList>;
  [screens.MARKET_DATA]: undefined;
}

export type IPTrackerStackProps = BottomTabScreenProps<
  RootBottomTabNavigatorParamList,
  screens.IP_TRACKER_STACK
>

export type MarketDataStackProps = BottomTabScreenProps<
  RootBottomTabNavigatorParamList,
  screens.MARKET_DATA
>

export type StackParamList = {
  [screens.IP_TRACKER]: undefined,
  [screens.IP_TRACKER_DETAILS]: {
    image: ImageSourcePropType,
    ipInfo: IPInfo,
  }
}

export type IPTrackerProps = NativeStackScreenProps<
  StackParamList,
  screens.IP_TRACKER_DETAILS
>
export type IPTrackerNavigation = IPTrackerProps['navigation'];

export type IPTrackerDetailsProps = NativeStackScreenProps<
  StackParamList,
  screens.IP_TRACKER_DETAILS
>
export type IPTrackerDetailsRoute = IPTrackerDetailsProps['route'];




