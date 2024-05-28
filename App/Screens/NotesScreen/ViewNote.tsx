import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalApi from "../../Utils/GlobalApi";


interface NoteParams {
    note: {
      title: string;
      body: string;
      id: string;
    };
  }

const ViewNote = () => {
  const params = useRoute().params as NoteParams;
  const [title, setTitle] = useState(params.note.title);
  const [body, setBody] = useState(params.note.body);
  const navigation = useNavigation();

  const handleUpdateNote = () => {
    console.log("Title:", title);
    console.log("Note:", body);
    if (title === "") {
      ToastAndroid.show("Please write the title", ToastAndroid.LONG);
      return;
    }
    if (body === "") {
      ToastAndroid.show("Please write the note", ToastAndroid.LONG);
      return;
    }
    const currentDate = new Date();

    const data = {
      body,
      title,
      id: params.note.id
    };

    GlobalApi.updateNote(data)
      .then((res) => {
        console.log(res);
        ToastAndroid.show(
          "Note has been updated successfully",
          ToastAndroid.LONG
        );
        navigation.goBack();
      })
      .catch((err) => {
        ToastAndroid.show("error", ToastAndroid.LONG);
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
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
          NOTES
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor={"#cccccc"}
        />
        <TextInput
          style={styles.noteInput}
          placeholder="Write your note here..."
          value={body}
          multiline
          onChangeText={setBody}
          placeholderTextColor={"#cccccc"}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleUpdateNote}>
          <Text style={styles.buttonText}>Update Note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titleInput: {
    height: 50,
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    fontFamily: "poppinsBold",
  },
  noteInput: {
    flex: 1,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    fontFamily: "pop",
  },
  saveButton: {
    backgroundColor: "#ffffe0",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8a8a71",
  },
  buttonText: {
    color: "#8a8a71",
    fontSize: 18,
    fontFamily: "popSB",
  },
});

export default ViewNote;
{
  /* <View
 style={{ flexDirection: "row", alignItems: "center", marginVertical: 20, paddingHorizontal: 10}}
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
   NOTES
 </Text>
</View> */
}
