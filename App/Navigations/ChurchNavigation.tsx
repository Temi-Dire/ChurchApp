import { createStackNavigator } from "@react-navigation/stack";
import CellScreen from "../Screens/CellScreen/CellScreen";
import CellDetail from "../Screens/CellScreen/CellDetail";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="cells" component={CellScreen} />
      <Stack.Screen name="cell-detail" component={CellDetail} />
    </Stack.Navigator>
  );
}
