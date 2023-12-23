import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import categories_data from  '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const categoriesScreen = ({onSelectCategoryEvent}) => {
  
  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
  )

  return(
    <>
    <Header title="Categories" />
    <FlatList
         data={categories_data}
         renderItem={renderCategoryItem}
         keyExtractor={item=>item}
    />
    </>
  )
}

export default categoriesScreen

const styles = StyleSheet.create({
})