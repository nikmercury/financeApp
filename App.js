import { StatusBar } from 'expo-status-bar';
import {Ract} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Costs } from './Funds/costs';
import Earnings from './Funds/earnings';
import Login from './Funds/login';
import Settings from './Funds/settings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Costs" component={Costs} />
      <Drawer.Screen name="Earnings" component={Earnings} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
