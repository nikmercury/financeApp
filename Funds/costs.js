import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Costs = props => {
    const [costArray, setCostArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')


    const renderItem = ({item}) => (
        <View style={styles.costLineWrapper}>
            <Text style={styles.costId}>{item.id}</Text>
            <Text style={styles.costTitle}>{item.title}</Text>
            <Text style={styles.costBody}>{item.body}</Text>
        </View>
    )

    useEffect(() => {
        AsyncStorage.getItem('token').then((value) => {
            if (value) {
                setToken(value)
            }
        })
    },[])
    
    useEffect(() => {
        getPost()
    },[token])


    const getPost = () => {
        setIsLoading(true)
        let URL = 'https://jsonplaceholder.typicode.com/posts'
        fetch(URL, {
            headers: {
                'Token': token
            }
        }).then(res => res.json()).then(res => {
            setCostArray(res)
        }).finally(() => setIsLoading(false))
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={costArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onRefresh={getPost}
                refreshing={isLoading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    costLineWrapper: {
        height: 50,
        flex: 1,
        flexDirection: 'row',

    },
    costId: {
        height: 50,
        lineHeight: 50,
        flex: 2,
        paddingLeft: 20,
    },
    costTitle: {
        height: 50,
        lineHeight: 50,
        flex: 2,
    },
    costBody: {
        height: 50,
        lineHeight: 50,
        flex: 10,
        paddingRight: 20,
    },
  });