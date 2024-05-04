import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { signin } from "../../../assets";

WebBrowser.maybeCompleteAuthSession();

export default function SigninScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'space-between', height: '100%'}}>
      <View style={styles.container}>
        <View>
          <Image source={signin} style={{}}/>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 30,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 30,
            fontWeight: "500",
            marginBottom: 40,
            fontFamily: 'popSB'
          }}
        >
          Welcome To{" "}
          <Text style={{ fontWeight: "bold", fontSize: 35 }}>
            Elevation Church
          </Text>
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 20,
            marginBottom: 20,
            fontFamily: 'pop'
          }}
        >
          Experience a place where worship is heartfelt, community is genuine,
          and love is unconditional.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "#8a8a71",
              fontWeight: "600",
            }}
          >
            Continue With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: '100%',
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e2e2e2",
    borderRadius: 12,
    flex:1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 99,
    marginTop: 40,
    width: "100%",
    marginBottom: 40,
  },
});
