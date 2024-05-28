import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Discover() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        {/* Header */}
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
            Discover
          </Text>
        </View>

        {/* Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Why you should join Elevation Church?
          </Text>
          <Text style={styles.sectionText}>
            Elevation Church is a vibrant community dedicated to empowering
            individuals to live a life of purpose and impact. With inspiring
            worship experiences, engaging teachings, and opportunities for
            personal growth, Elevation Church offers a welcoming environment for
            people from all walks of life.
          </Text>
          {/* <Text style={styles.sectionText}>
            Whether you're seeking spiritual guidance, looking for a supportive
            community, or simply curious to learn more about the Christian
            faith, Elevation Church welcomes you with open arms. Join us as we
            journey together towards spiritual transformation and making a
            positive difference in the world.
          </Text> */}
        </View>

        {/* Additional Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <Text style={styles.sectionText}>
            Stay tuned for our upcoming events and gatherings.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Outreach</Text>
          <Text style={styles.sectionText}>
            Learn about our efforts to serve and impact the community.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Involved</Text>
          <Text style={styles.sectionText}>
            Discover ways to get involved and contribute to our community.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    padding: 20,
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
});

// const styles = StyleSheet.create({
// });
