import { FlatList, StyleSheet, Text, View,} from 'react-native'
//import categories_data from  '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'

const CategoriesScreen = ({navigation}) => {

  const categories = useSelector (state=>state.shopReducer.categories)
  
  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  

  return(
    <>
    {/* <Header title="Categories" /> */}
    <FlatList style={styles.categories}
         data={categories}
         renderItem={renderCategoryItem}
         keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categories:{
    marginBottom: 80,
  }
})