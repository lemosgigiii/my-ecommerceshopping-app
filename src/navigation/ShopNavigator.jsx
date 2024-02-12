import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductsByCategoryScreen from "../screens/ProductsByCategoryScreen"
import ProductDetailScreen from "../screens/ProductDetailScreen"
import Header from "../components/Header";


const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="Products"
                component={ProductsByCategoryScreen}
                options={{ title: 'stock avaible', }}
            />
            <Stack.Screen
                name="Details"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>

    )
}

export default ShopNavigator