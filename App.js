import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useMemo} from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './context/context';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Costs } from './Funds/costs';
import Earnings from './Funds/earnings';
import Login from './Funds/login';
import Settings from './Funds/settings';

const Drawer = createDrawerNavigator();

export default function App() {
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const authContent = useMemo(() => ({
    signIn: () => {
      setToken('a')
    },
    signOut: () => {
      setToken('')
    }
  }),[])

  useEffect(() => {
    AsyncStorage.getItem('token').then((value) => {
        if (value) {
            setToken(value)
        }
    })
},[])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  },[])

  if (isLoading) {
    return(
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size='large'/>
      </SafeAreaView>
    )
  }

  return (
  <AuthContext.Provider value={authContent}>
    <NavigationContainer>
      <Drawer.Navigator>
        {token !== null ? (
          <>
          <Drawer.Screen name="Costs" component={Costs} />
          <Drawer.Screen name="Earnings" component={Earnings} />
          <Drawer.Screen name="Settings" component={Settings} />
         </>
        ) : (
         <Drawer.Screen name="Login" component={Login} />
       )}
      </Drawer.Navigator>
    </NavigationContainer>
  </AuthContext.Provider>
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
