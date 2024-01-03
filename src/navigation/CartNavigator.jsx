import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import CartScreen from "../screens/CartScreen";


const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
        
        <Stack.Navigator
            initialRouteName="cart"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="cart"
                component={CartScreen}
            />

            </Stack.Navigator >
)
}

export default CartNavigator