import { ActivityIndicator } from 'react-native';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import CategoriesScreen from './src/screens/CategoriesScreen';
import {useFonts} from 'expo-font'
import {useState} from 'react';


export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  //console.log("categoria sleccionada:", categorySelected)

  const [fontLoaded] = useFonts({
    'EBGaramond-Bold': require('./assets/fonts/EBGaramond-Bold.ttf'),
    'Alegreya-Regular': require('./assets/fonts/EBGaramond-Regular.ttf'),
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
