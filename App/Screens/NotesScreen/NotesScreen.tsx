import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

interface Notes {
  title: string;
  body: string;
  date: string;
  id: string;
}

export default function NotesScreen() {
  const [userNotes, setUserNotes] = useState<Notes[]>([]);
  const navigation = useNavigation();
  const { user } = useUser();

  const getNotes = () => {
    GlobalApi.getNotes(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
        const data = res as { notes: Notes[] };
        //   console.log(res);
        setUserNotes(data.notes);
      })
      .catch((err) => console.log("an error occured"));
  };


  const deleteNote = (id) => {
    GlobalApi.deleteNote(id).then((res) => {console.log("item was deleted successfully");  ToastAndroid.show("Note was deleted successfully", ToastAndroid.LONG);}).catch((err) => {console.log("couldn't delete", err)})
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  useEffect(() => {
    getNotes();
  }, [userNotes]);
  return (
    <SafeAreaView style={styles.container}>

        <View style={{flexDirection: "row",  justifyContent: "space-between"}}>
            <Text style={styles.title}>NOTES</Text>
            <TouchableOpacity onPress={() => navigation.navigate("add-note")}>
                <SimpleLineIcons name="note" size={24} color="#8a8a71" />
            </TouchableOpacity>
        </View>
        <FlatList
          data={userNotes}
          renderItem={({ item }) => (
            <View
              key={item.title}
              style={styles.churchContainer}
              // onPress={() => { console.log(userNotes)}}
            >
              <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 20, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomWidth: 2, borderBottomColor: "#8a8a71"}}>
              <Text style={styles.churchName}>{item.title}</Text>
              <TouchableOpacity onPress={() => {deleteNote(item.id)}}><AntDesign name="delete" size={24} color="red" /></TouchableOpacity>
              </View>
              <Text style={{paddingHorizontal: 20, paddingTop: 5}}>{truncateText(item.body, 200)}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("view-note", {note: {title: item.title, body: item.body, id: item.id}})}><Text style={styles.viewButton}>View</Text></TouchableOpacity>
            </View>
          )}
        />
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  churchContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingBottom: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#8a8a71"
  },
  churchName: {
    fontSize: 18,
    // fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "poppinsBold"
  },
  distance: {
    fontSize: 16,
    color: "#666",
  },
  viewButton: {
    fontSize: 16,
    color: "#ffffff", // You can change the color to your preference
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginRight:20,
    backgroundColor: "#8a8a71",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 99,
    
  }
});
