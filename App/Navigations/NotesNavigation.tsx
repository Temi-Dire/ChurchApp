import { createStackNavigator } from "@react-navigation/stack";
import Notes from "../Screens/HomeScreen/Notes";
import NotesScreen from "../Screens/NotesScreen/NotesScreen";
import ViewNote from "../Screens/NotesScreen/ViewNote";

const Stack = createStackNavigator();

export default function NotesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="note" component={NotesScreen} />
      <Stack.Screen name="add-note" component={Notes} />
      <Stack.Screen name="view-note" component={ViewNote} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
