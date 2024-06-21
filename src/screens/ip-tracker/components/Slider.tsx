import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import screens from "../../../constants/navigation.ts";
import { IPInfo } from "../../../types";
import { IPTrackerNavigation } from "../../../types/navigation.ts";

interface ISlider {
  ipInfo: IPInfo
}

const ITEM_WIDTH = 300;

const Slider: React.FC<ISlider> = ({ ipInfo }) => {
  const {width: screenWidth} = useWindowDimensions();
  const navigation = useNavigation<IPTrackerNavigation>();

  const images = [
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg'),
    require('../../../assets/4.jpg'),
    require('../../../assets/5.jpg'),
  ]

  const renderItem = ({item}: {item: ImageSourcePropType}) => {
    return (
      <Pressable onPress={() => navigation.navigate(screens.IP_TRACKER_DETAILS, {image: item, ipInfo})} style={styles.container}>
        <Image source={item} style={styles.image} />
      </Pressable>
    )
  }

  return (
    <View>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {width: 300, height: 300},
  image: {width: 300, height: 300}
})

export default Slider;
