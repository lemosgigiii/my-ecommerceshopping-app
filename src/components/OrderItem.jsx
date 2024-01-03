import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';

//message test

const OrderItem = ({ order, total }) => {
    return (
        <Card style={styles.cartItemContainer}>
            <View >
                <Text style={styles.createdAt}>
                created {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.total}>Total: USD{total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon} onPress={null}>
                <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt:{
        fontFamily: 'EBGaramond-Bold',
        marginBottom:5,
    },
    total:{
        fontFamily: 'EBGaramond-Bold',
        fontSize:14,
    }
})