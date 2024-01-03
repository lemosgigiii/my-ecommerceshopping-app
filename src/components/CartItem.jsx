import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons'; 
import { colors } from '../global/colors';


const CartItem = ({item}) => {


  return (
    <Card style={styles.cartItemContainer}>
        <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.images[0] }}
            />
        <View >       
            <Text style={styles.cartTitle}>{item.title}</Text>
            <Text style={styles.cartLightText}>{item.brand}</Text>
            <Text style={styles.cartLightText}>${item.price} c/u</Text>
            <Text style={styles.cartTotalPrice}>
            total quantity: {item.quantity}, total: ${item.price*item.quantity}
            </Text>
        </View>
        <TouchableOpacity style={styles.trashCart} onPress={null}>
            <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    cartContenContainer:{
        flexDirection: 'row',
    },
    imageCartItem: {
        height: 50,
        width:50,
        marginRight:10,
    },
    trashCart: {
        marginLeft: 'auto',
        color: colors.secondary,
    },
    cartTitle:{
        fontFamily:'EBGaramond-Bold',
        fontSize:20,
        color: "gray",
    },
    cartLightText:{
        fontFamily:'EBGaramond-Bold',
        fontSize:15,
        color: "gray",
    },cartTotalPrice:{
        fontFamily:'EBGaramond-Bold',
        fontSize:16,
        color: "gray",
    }
})