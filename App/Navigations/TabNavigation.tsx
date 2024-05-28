import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import OfferingSCreen from "../Screens/OfferingScreen/OfferingScreen";
import CellScreen from "../Screens/CellScreen/CellScreen";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ChurchNavigation from "./ChurchNavigation"
import { SimpleLineIcons } from '@expo/vector-icons';
import NotesScreen from "../Screens/NotesScreen/NotesScreen";
import NotesNavigation from "./NotesNavigation";



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8a8a71",
        // tabBarStyle: { height: 60, padding:10 },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({color}) => <Text style={{fontFamily: "popSB", color}}>Home</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Sermon"
        component={OfferingSCreen}
        options={{
          tabBarLabel: ({color}) => <Text style={{fontFamily: "popSB", color}}>Giving</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="gift" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cells"
        component={ChurchNavigation}
        options={{
          tabBarLabel: ({color}) => <Text style={{fontFamily: "popSB", color}}>Cells</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="church" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notes"
        component={NotesNavigation}
        options={{
          tabBarLabel: ({color}) => <Text style={{fontFamily: "popSB", color}}>Notes</Text>,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="note" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
