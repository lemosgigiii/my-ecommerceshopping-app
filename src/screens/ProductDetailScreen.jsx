import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { addItem } from '../features/cartSlice'
import { setProductSelected } from '../features/shopSlice'
import { useSelector, useDispatch } from 'react-redux'


const ProductDetailScreen = ({ route }) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)

  const productId = route.params

  const { height, width } = useWindowDimensions()

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    const productFound = products_data.find(product => product.id === productId)
    setProductSelected(productFound)
    setIsLoading(false)
  }
    , [productId])

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }))

  }



  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            {/* <Header title="details of the products" /> */}
            <ScrollView >
              <Image
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity onPress={onAddToCart}>
                  <Text style={styles.buyText}>add to cart</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
      }

    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
    color: "grey",
  },
  title: {
    fontFamily: 'EBGaramond-Bold',
    fontSize: 32,
    color: "grey",
  },
  description: {
    fontFamily: 'EBGaramond-Bold',
    fontSize: 20,
    color: "grey",
  },
  price: {
    fontFamily: 'EBGaramond-Bold',
    fontSize: 32,
    color: colors.secondary
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buyText: {
    color: "green",
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  }
})