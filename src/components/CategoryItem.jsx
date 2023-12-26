import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Card from './Card'

const CategoryItem = ({category, navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Products",{category})}>
    <Card style={styles.cardContainer}>
      <Text style={styles.text}>{category}</Text>
    </Card>
    </TouchableOpacity>
  )
  }


export default CategoryItem

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#E4DDDD",
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: 12
  }
})