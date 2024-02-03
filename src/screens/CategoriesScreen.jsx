import { FlatList, StyleSheet, Text, View,} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({navigation}) => {

  
  const {data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return(
    <>
    <FlatList style={styles.categories}
         data={data}
         renderItem={renderCategoryItem}
         keyExtractor={item=>item}
    />
    {
            error &&
            <CustomError error={error} />
        }
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categories:{
    marginBottom: 80,
  },
  categoryError:{
      
  }
})