import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import axios from "axios";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import GlobalApi from "../../Utils/GlobalApi";

const ChurchScreen = () => {
  // Dummy data for demonstration
  const churches = [
    { id: 1, name: "St. John's Cathedral", distance: "0.5 miles" },
    { id: 2, name: "Grace Community Church", distance: "1.2 miles" },
    { id: 3, name: "Hope Church", distance: "1.8 miles" },
    { id: 4, name: "Unity Church", distance: "2.5 miles" },
    { id: 5, name: "Faith Baptist Church", distance: "3.0 miles" },
  ];

  const navigation = useNavigation();

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  };

  // useEffect(() => {
  //   userLocation && GetNearbyPlaces();
  // }, []);

  let data1;

  const GetNearbyPlaces = () => {
    const data = {
      includedTypes: ["church"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: 37.4220936,
            longitude: -122.083922,
          },
          radius: 500.0,
        },
      },
    };
    GlobalApi.NewNearByPlaces(data).then((res) => {
      console.log(res.data);
      data1 = res.data;
      console.log("works")
    }).catch((err) => console.log("not works", err));
  };

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const [churchesNear, setChurchesNear] = useState([]);

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // try {
      //   const response = await axios.get(
      //     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${37.4220936},${-122.083922}&radius=5000&type=church&key=AIzaSyAuR7iBeVhEje5yCjCQrynVhyBpI70Yyfc`
      //   );

      //   setChurchesNear(response.data.results);
      //   console.log(churchesNear);
      // } catch (error) {
      //   console.error("Error fetching nearby churches:", error);
      // }
    };

    getUserLocation();
  }, []);

  const calculateDistance = (
    userLocation: { latitude: number; longitude: number },
    addressLocation: { latitude: number; longitude: number }
  ) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat =
      ((addressLocation.latitude - userLocation.latitude) * Math.PI) / 180;
    const dLon =
      ((addressLocation.longitude - userLocation.longitude) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLocation.latitude * Math.PI) / 180) *
        Math.cos((addressLocation.latitude * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <MapView
        style={styles.map}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.4219983,
          longitude: -122.084,
          latitudeDelta: 0.422,
          longitudeDelta: 0.422,
        }}
      />
      <Marker
        coordinate={{ latitude: 37.4219983, longitude: -122.084 }}
        pinColor="red"
      /> */}
      <TouchableOpacity onPress={() => GetNearbyPlaces() }><Text>dire</Text></TouchableOpacity>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <ScrollView>
  //       <Text style={styles.title}>Nearest Churches</Text>
  //       {churches.map(church => (
  //         <TouchableOpacity key={church.id} style={styles.churchContainer} onPress={() => {navigation.navigate("cell-detail"); console.log(userLocation, churchesNear);
  //         }}>
  //           <Text style={styles.churchName}>{church.name}</Text>
  //           <Text style={styles.distance}>{church.distance}</Text>
  //         </TouchableOpacity>
  //       ))}
  //       <MapView style={styles.map} />

  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  churchContainer: {
    // backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  churchName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  distance: {
    fontSize: 16,
    color: "#666",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ChurchScreen;
