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
import AllReadingsItem from "./AllReadingsItem";

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
        // console.log(data.recentReadings);
        setRecentReadings(data.recentReadings);
      })
      .catch((err) => {
        console.log(`An error occurred`, err);
      });
  };

  

  useEffect(() => {
    getRecentReadings();
  }, [recentReadings]);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#8a8a71",
              padding: 10,
              borderRadius: 100,
            }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontFamily: "popSB", marginLeft: 20 }}>
            Readings
          </Text>
        </View>
        <FlatList
          data={recentReadings}
          renderItem={({ item }) => (
            <AllReadingsItem item={item}/>
          )}
        />
       

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
