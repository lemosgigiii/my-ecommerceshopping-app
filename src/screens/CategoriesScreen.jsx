import { FlatList, StyleSheet, Text, View,} from 'react-native'
//import categories_data from  '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({navigation}) => {

  //const categories = useSelector (state=>state.shopReducer.categories)
  const {data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  

  return(
    <>
    {/* <Header title="Categories" /> */}
    <FlatList style={styles.categories}
         data={data}
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