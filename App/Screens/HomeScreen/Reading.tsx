import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

interface RouteParams {
    reading: {
      name: string;
      image: {
        url: string;
      };
      study: string;
      bibleVerse: string;
    };
  }

export default function Reading() {
  const navigation = useNavigation();
  const params = useRoute().params as RouteParams;
  return (
    <SafeAreaView style={{ paddingHorizontal: 10}}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20}}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#8a8a71",
            padding: 10,
            borderRadius: 100,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontFamily: "popSB", marginLeft: 20 }}>
          {params.reading.name}
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Image
          source={{ uri: params.reading.image.url }}
          style={{ width: "100%", height: 400, marginVertical: 20 }}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.sectionText}>{params.reading.study}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reference</Text>
          <Text style={styles.sectionText}>{params.reading.bibleVerse}</Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("notes")}>
          <Text style={{color: "white",  marginRight: 10, fontFamily: "crimsonBoldItalic", fontSize: 20}}>TAKE NOTE</Text>
          <SimpleLineIcons name="note" size={18} color="white" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "popSB",
  },
  sectionText: {
    fontSize: 16,
    fontFamily: "pop",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#8a8a71",
    borderRadius: 99,
    alignSelf: "center", 
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  }
});
