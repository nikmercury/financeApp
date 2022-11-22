import React, {useState, useEffect} from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAnimatedGestureHandler } from "react-native-reanimated";
import { AuthContext } from "../context/context";

export default function Settings() {

  const {signOut} = React.useContext(AuthContext)

    async function clearToken(){
      AsyncStorage.removeItem('token')
      signOut()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button
              title={'Logout'}
              style={styles.input}
              onPress={clearToken}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 300,
      height: 48,
      pudding: 10,
      borderWidth: 1,
      borderColor: 'gold',
      marginBottom: 10,
    }
  });
  