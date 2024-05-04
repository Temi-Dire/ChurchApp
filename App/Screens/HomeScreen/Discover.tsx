import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Discover() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal: 10}}>
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity
          style={{backgroundColor: "#8a8a71", padding: 10, borderRadius: 100}}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{
              fontSize: 30,
              fontFamily: "popSB",
              marginLeft: 20,
            }}>Discover</Text>
        </View>
        <View>
            <View>
                <Text>Why you should join elevation church?</Text>
                <Text></Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
