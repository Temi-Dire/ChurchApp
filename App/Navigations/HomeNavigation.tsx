import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BibleStudyScreen from "../Screens/BibleStudyScreen/BibleStudyScreen";
import AllReadings from "../Screens/HomeScreen/AllReadings";
import Discover from "../Screens/HomeScreen/Discover";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="bible-study" component={BibleStudyScreen} />
      <Stack.Screen name="all-readings" component={AllReadings} />
      <Stack.Screen name="discover" component={Discover} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}