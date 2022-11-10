import React, { useState } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from "react-native-gesture-handler";

export default function Earnings() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
          console.log('cant save token')
        }
      }

    async function clearToken() {
      AsyncStorage.removeItem('token')
    }

    function submitHandler() {
      return true
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                defaultValue={username}
                onChangeText={text => setUsername(text)}
                placeholder={'Username'}
                style={styles.input}
            />
             <TextInput
                defaultValue={password}
                onChangeText={text => setPassword(text)}
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
              title={'Login'}
              style={styles.input}
              onPress={submitHandler}
            />
            <Button
              title={'Logout'}
              style={styles.input}
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
