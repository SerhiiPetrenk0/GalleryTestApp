import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GallerySreen from './src/components/screens/GallerySreen'
import StackGallery from './src/components/navigator/Navigator'
import { Provider } from 'react-redux'
import { appStore } from './src/redux';



const App = () => {

  return (
    <Provider store={appStore}>
      <NavigationContainer>
      <StackGallery />
      </NavigationContainer>
    </Provider>
);
};

export default App;
