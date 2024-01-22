import { StyleSheet, Text, View, FlatList, ActivityIndicator, } from 'react-native'
//import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { useSelector, useDispatch } from 'react-redux'
import { usegetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategoryScreen = ({ route, navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  //console.log("Route params: ",route.params)
  //const {category} = route.params

  const category = useSelector(state => state.shopReducer.categorySelected)
  //const productsFilteredByCategory = useSelector(state =>state.shopReducer.productsFilteredByCategory)

  const { data: productsFilteredByCategory, isLoading, error } = usegetProductsByCategoryQuery(category)

  useEffect(() => {
    //const productsFilteredByCategory = products_data.filter(product=>product.category===category)
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }

  }, [category, search])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      {
        isloading ?
          <ActivityIndicator />
          :
          <>
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
              data={productsByCategory}
              renderItem={renderProductItem}
              keyExtractor={item => item.id.toString()}
            />
          </>
      }
    </>
  )
}


export default ProductsByCategoryScreen

const styles = StyleSheet.create({

})