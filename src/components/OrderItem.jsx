import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';

const OrderItem = ({ order, setOrderId, setModalVisible }) => {

    let date = new Date(order.createdAt)
    date = date.toLocaleString()

    return (
        <Card style={styles.cartItemContainer}>
            <View >
                <Text style={styles.createdAt}>
                    created {date}
                </Text>
                <Text style={styles.total}>Total: USD{order.total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon} onPress={() => {
                setOrderId(order.orderId)
                setModalVisible(true)
            }}>
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
    createdAt: {
        fontFamily: 'EBGaramond-Bold',
        marginBottom: 5,
    },
    total: {
        fontFamily: 'EBGaramond-Bold',
        fontSize: 14,
    }
})