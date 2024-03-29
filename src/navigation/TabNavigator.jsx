
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { colors } from "../global/colors";
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';



const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,

            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="tshirt-crew-outline" size={24} color={focused ? "#6D6466" : "#ccc"} />

                    )
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="shopping-cart" size={24} color={focused ? "#6D6466" : "#ccc"} />

                    )
                }}
            />
            <Tab.Screen
                name="OrderStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="credit-card-clock-outline" size={24} color={focused ? "#6D6466" : "#ccc"} />

                    )
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="user-ninja" size={24} color={focused ? "#6D6466" : "#ccc"} />
                    )
                }}
            />
        </Tab.Navigator>
    )

}


export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowcolor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,
        height: 40,
        borderRadius: 30,
    }
})