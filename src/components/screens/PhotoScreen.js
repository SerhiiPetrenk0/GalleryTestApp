import React, { useEffect, useState } from 'react';
import { 
  View,
  Image,
  Dimensions,
  StatusBar
} from "react-native"

const PhotoSreen = ({route, navigation}) => {
 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 const {item} = route.params;
    return(
      <View>
        <StatusBar translucent backgroundColor={`${item.color}99`} />
          <Image 
          resizeMode='cover'
          style={{ width: windowWidth, height: windowHeight + StatusBar.currentHeight * 2 + 3}}
          source={{
          uri: `${item.links.download}`,
          }}
          />
      </View>
    )
}

export default PhotoSreen