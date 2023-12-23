import { StyleSheet, Text, View, FlatList } from 'react-native'
import products_data from '../data/categories_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Search from '../components/Search'

const ProductsByCategoryScreen = ({category}) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const productsFilteredByCategory = products_data.filter(product=>product.category===category)
    const productsFiltered = productsFilteredByCategory.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredByCategory)
  },[category, search])

  const renderProductItem = ({item}) => (
      <ProductItem product={item} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Header title="Products" />
      <Search onSearchHandlerEvent={onSearch}/>
      <FlatList
        data={productsByCategory}
        renderItem= {renderProductItem}
        keyExtractor={item=>item.id.toString()}
    />
    </>
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  
})