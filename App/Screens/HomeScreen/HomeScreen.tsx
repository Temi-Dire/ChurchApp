import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Utils/Colors";
import Services from "./Services";
import BibleStudy from "./BibleStudy";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation();
  const [active, setActive] = useState<string>("services");


  const str:string = "discover"
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: '#8a8a71', paddingVertical: 15 }}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.SECONDARY,
              fontSize: 17,
              fontWeight: "700",
            }}
          >
            ELEVATION CHURCH
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "50%",
                borderBottomWidth: active === "services" ? 2 : 0,
                paddingBottom: 5,
              }}
              onPress={() => setActive("services")}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  fontWeight: "700",
                  color: active === "services" ? "#000000" : "#a2a2a2",
                }}
              >
                Sunday Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "50%",
                borderBottomWidth: active === "study" ? 2 : 0,
                paddingBottom: 5,
              }}
              onPress={() => {
                setActive("study");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  fontWeight: "700",
                  color: active === "study" ? "#000000" : "#a2a2a2",
                }}
              >
                Bible Study
              </Text>
            </TouchableOpacity>
          </View>
          {/* button component */}
          <TouchableOpacity style={styles.discoverBtn} onPress={() => navigation.navigate([])}>
            <Text style={{ textAlign: "center", fontWeight: "700", color: "#8a8a71" }}>
              DISCOVER
            </Text>
          </TouchableOpacity>
          {/*Services Component*/}
          {active === "services" && <Services />}
          {active === "study" && <BibleStudy />}
          {/*BibleStudy Component*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
  },
  discoverBtn: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: "#8a8a71",
    borderWidth: 1,
  },
});
