import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Costs = props => {
    const [costArray, setCostArray] = useState([])
    const [isLoading, setisLoading] = useState(false)


    const renderItem = ({item}) => (
        <Text>{item.id} - {item.title}</Text>
    )

    
    useEffect(() => {
        getPost()
    },[])


    const getPost = () => {
        setisLoading(true)
        let URL = 'https://jsonplaceholder.typicode.com/posts'
        fetch(URL).then(res => res.json()).then(res => {
            setCostArray(res)
        }).finally(() => setisLoading(false))
    }


    return (
        <SafeAreaView>
            <FlatList
                data={costArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onRefresh={getPost}
                refreshing={isLoading}
            />
        </SafeAreaView>
    )
}