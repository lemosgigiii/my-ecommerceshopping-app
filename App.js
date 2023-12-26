import { ActivityIndicator } from 'react-native';
//import CategoriesScreen from './src/screens/CategoriesScreen'
//import ProductDetailScreen from './src/screens/ProductDetailScreen';
//import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'
import { useState } from 'react';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  //console.log("categoria sleccionada:", categorySelected)

  const [fontLoaded] = useFonts({
    'Alegreya-regular': require('./assets/fonts/Alegreya-Regular.ttf'),
    'Alegreya-Bold': require('./assets/fonts/Alegreya-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <>
      <Navigator />
      {/* {
      categorySelected
      ?
      <ProductsByCategoryScreen category={categorySelected} /> 
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory} /> 
        } */}
    </>
  )
}
