import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GlobalApi from "../../Utils/GlobalApi";
import { Colors } from "../../Utils/Colors";

interface RecentReading {
  id: string;
  name: string;
  bibleVerse: string;
  study: string;
  image: {
    url: string;
  };
}

export default function AllReadings() {
  const [recentReadings, setRecentReadings] = useState<RecentReading[]>();
  const getRecentReadings = () => {
    GlobalApi.getRecentReadings()
      .then((res) => {
        const data = res as { recentReadings: RecentReading[] };
        console.log(data.recentReadings);
        setRecentReadings(data.recentReadings);
      })
      .catch((err) => {
        console.log(`An error occurred`, err);
      });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  useEffect(() => {
    getRecentReadings();
  }, [recentReadings]);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontSize: 20,
              fontFamily: "pop",
            }}
          >
            Readings
          </Text>
        </View>
        <FlatList
          data={recentReadings}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Image
              source={{ uri: item.image.url }}
              style={{ width: 150, height: 150, marginRight:10 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ marginBottom: 15, fontFamily: "pop" }}>
                {item.name}
              </Text>
              <Text style={{ marginBottom: 15, fontFamily: "pop" }}>
                Bible Verse: {item.bibleVerse}
              </Text>
              <Text
                numberOfLines={2}
                style={{ marginBottom: 15, fontFamily: "pop" }}
              >
                {item.study}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  marginLeft: 40,
                  fontFamily: "pop",
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#8a8a71"
                }}
              >
                Read More
              </Text>
            </View>
          </View>
          )}
        />
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});
