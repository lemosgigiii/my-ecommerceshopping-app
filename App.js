import { ActivityIndicator } from 'react-native';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import {useFonts} from 'expo-font'
import {useState} from 'react';
import CategoriesScreen from './src/screens/CategoriesScreen';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  
  console.log("categoria sleccionada:", categorySelected)
     
  const [fontLoaded] = useFonts({
    'Alegreya-regular' : require('./assets/fonts/Alegreya-Regular.ttf'),
    'Alegreya-Bold' : require('./assets/fonts/Alegreya-Bold.ttf'),
 })

 if(!fontLoaded) return <ActivityIndicator />

 const onSelectCategory = (category)=> {
  setCategorySelected(category)
 }


  return (
    <>{
    categorySelected
    ?
    <ProductsByCategoryScreen category={categorySelected} /> 
    :
    <CategoriesScreen onSelectCategoryEvent={onSelectCategory} /> 
      }
    </>
 );
}
