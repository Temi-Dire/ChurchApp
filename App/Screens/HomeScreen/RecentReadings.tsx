import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";

interface RecentReading {
  id: string;
  name: string;
  bibleVerse: string;
  image: {
    url: string;
  };
}

export default function RecentReadings() {
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

  return (
    <View>
      <FlatList
        data={recentReadings}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item.image.url }}
              style={{ width: 150, height: 130 }}
            />
            <Text style={{ marginTop: 8, fontFamily: "popSB" }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "crimsonBoldItalic",
                color: Colors.SECONDARY_LIGHT,
              }}
            >
              {item.bibleVerse}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
