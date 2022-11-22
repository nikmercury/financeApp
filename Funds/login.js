import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from "react-native-gesture-handler";

import { AuthContext } from "../context/context";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = React.useContext(AuthContext)


    async function clearToken() {
      AsyncStorage.removeItem('token')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                defaultValue={username}
                onChangeText={setUsername}
                placeholder={'Username'}
                style={styles.input}
            />
             <TextInput
                defaultValue={password}
                onChangeText={setPassword}
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
              title={'Login'}
              style={styles.input}
              onPress={signIn}
            />
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
