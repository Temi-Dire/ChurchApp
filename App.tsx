import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./App/Navigations/TabNavigation";
import SigninScreen from "./App/Screens/SigninScreen/SigninScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";



const tokenCache = {
  async getToken(key:string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key:string, value:string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    pop: require("./assets/fonts/PoppinsRegular.ttf"),
    popSB: require("./assets/fonts/PoppinsSemiBold.ttf"),
    crimsonItalic: require("./assets/fonts/CrimsonTextItalic.ttf"),
    poppinsBold: require("./assets/fonts/PoppinsBold.ttf"),
    crimsonBoldItalic: require("./assets/fonts/CrimsonTextBoldItalic.ttf"),
    crimsonSemiBold: require("./assets/fonts/CrimsonTextSB.ttf"),
    crimsonSemiBoldItalic: require("./assets/fonts/CrimsonTextSBItalic.ttf"),
  });
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_bG9naWNhbC1nb2F0LTgxLmNsZXJrLmFjY291bnRzLmRldiQ">
      <SafeAreaProvider>
        {fontsLoaded && (
          <View style={{ flex: 1 }}>
            <SignedIn>
              <NavigationContainer>
                <TabNavigator />
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <SigninScreen />
            </SignedOut>
            {/* <HomeScreen /> */}
            
          </View>
        )}
      </SafeAreaProvider>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
