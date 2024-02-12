import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from "../global/colors"
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const CartScreen = ({ }) => {

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const localId = useSelector(state => state.authReducer.localId)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    const createdAt = Date.now()
    triggerPost({ total, cartItems, localId: localId, createdAt: createdAt, orderId: Math.ceil(Math.random(1, 10) * 1000) })
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )
  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>total : USD {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.textConfirm}> confirm  </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontFamily: 'EBGaramond-Bold',
    fontSize: 20,
    color: "grey",
  },
  confirmButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'EBGaramond-Bold',
    fontSize: 16,
    color: '#fff',
  },
})