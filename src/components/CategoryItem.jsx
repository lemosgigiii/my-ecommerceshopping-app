import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Card from './Card'
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shopSlice"

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Products", { category })
      dispatch(setCategorySelected(category))
    }
    }>

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
    fontFamily: 'EBGaramond-Bold',
    fontSize: 15,
    paddingLeft: 10,
    color: "grey",
  }
})