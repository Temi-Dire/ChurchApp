import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import OfferingSCreen from "../Screens/OfferingScreen/OfferingScreen";
import CellScreen from "../Screens/CellScreen/CellScreen";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from "../Utils/Colors";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarLabel: () => <Text>Home</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Sermon"
        component={OfferingSCreen}
        options={{
          tabBarLabel: () => <Text>Offering</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-bill-wave" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cells"
        component={CellScreen}
        options={{
          tabBarLabel: () => <Text>Cells</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
