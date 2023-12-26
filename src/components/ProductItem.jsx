import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const productImage = ({product, navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Details",product.id )} style={styles.containerProdcutItem}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image
        style={styles.productImage}
        resizeMode= 'cover'
        source={{uri: product.thumbnail }}
      />
    </TouchableOpacity>
  )
}



export default productImage

const styles = StyleSheet.create({
    containerProductItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      margin:10,
    },
    productTitle:{
      width: 300,
      height: 30,
      paddingLeft: 15,
      fontFamily: 'EBGaramond-Bold',
      fontSize: 16,
      color: "grey",
    },
    productImage:{
      width:250,
      paddingBottom:80,
      paddingLeft: 30,
      height:90,
    }

})