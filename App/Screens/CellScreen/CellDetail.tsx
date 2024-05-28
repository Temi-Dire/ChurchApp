import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from "@expo/vector-icons";

const ChurchDetailScreen = () => {

  // Dummy data for demonstration
  const dummyChurch = { name: 'St. John\'s Cathedral', address: '123 Main Street, City, State', contact: '123-456-7890', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lobortis leo. Nam nec augue ut dolor eleifend dignissim. Nunc gravida orci sed sem elementum, in ullamcorper turpis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lobortis leo. Nam nec augue ut dolor eleifend dignissim. Nunc gravida orci sed sem elementum, in ullamcorper turpis pellentesque.',};

  // Replace dummy data with actual church data
  const churchData = dummyChurch;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
         <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}
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
          {churchData.name}
          </Text>
        </View>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.address}>Location: {churchData.address}</Text>
        <View>
          <Text style={{fontSize: 20, fontFamily: "poppinsBold", textDecorationLine: "underline", textDecorationColor:"black"}}>CONTACT</Text>
          <Text style={styles.contact}>Phone: {churchData.contact}</Text>
          <Text style={styles.contact}>Email: {churchData.contact}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28, // Larger font size
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 22, // Larger font size
    marginBottom: 10,
  },
  contact: {
    fontSize: 20, // Larger font size
    marginBottom: 10,
  },
  description: {
    fontSize: 18, // Larger font size
  },
});

export default ChurchDetailScreen;