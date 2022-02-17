import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GallerySreen from '../screens/GallerySreen';
import PhotoSreen from '../screens/PhotoScreen';

const Stack = createNativeStackNavigator();

const StackGallery = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={GallerySreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Photo" component={PhotoSreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default StackGallery