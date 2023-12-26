import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductsByCategoryScreen from "../screens/ProductsByCategoryScreen"
import ProductDetailScreen from "../screens/ProductDetailScreen"


const Stack = createNativeStackNavigator()

const Navigator = () => {
   return(
   <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen
    name="Categories"
    component={CategoriesScreen}
    />
<Stack.Screen
    name="Products"
    component={ProductsByCategoryScreen}
    />
    <Stack.Screen
    name="Details"
    component={ProductDetailScreen}
    />

    </Stack.Navigator>

   </NavigationContainer>
)
}

export default Navigator