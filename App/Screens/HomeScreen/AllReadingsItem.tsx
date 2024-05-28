import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AllReadingsItem({ item }: any) {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 28, flexDirection: "row", marginHorizontal: 10 }}>
      <Image
        source={{ uri: item.image.url }}
        style={{ width: 150, height: 150, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 15, fontFamily: "pop" }}>{item.name}</Text>
        <Text style={{ marginBottom: 15, fontFamily: "pop" }}>
          Bible Verse: {item.bibleVerse}
        </Text>
        <Text numberOfLines={2} style={{ marginBottom: 15, fontFamily: "pop" }}>
          {item.study}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("reading", {reading: item})}>
            <Text
              style={{
                textAlign: "right",
                marginLeft: 40,
                fontFamily: "pop",
                fontSize: 18,
                textDecorationLine: "underline",
                color: "#8a8a71",
              }}
            >
              Read More
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
