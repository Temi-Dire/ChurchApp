import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Header from '../../Components/Header';
import { Colors } from '../../Utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-root-toast';
import { RootSiblingParent } from "react-native-root-siblings";
import { useUser } from '@clerk/clerk-expo';
import { Paystack } from "react-native-paystack-webview";

export default function OfferingScreen() {
  const [amount, setAmount] = useState('');

  const {user} = useUser();

  const email = user?.primaryEmailAddress?.emailAddress;
  const name = user?.fullName


  const [pay, setPay] = useState(false);



  const handleSubmit = () => {
    if (
      user?.primaryEmailAddress?.emailAddress &&
      user.fullName &&
      amount
    ) {
      setPay(true);
    } else {
      Toast.show("Please enter an amount", {
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <RootSiblingParent>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Enter Amount</Text>
          <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="$40,000"
          placeholderTextColor="#A9A9A9"
        />
            </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Give As Tithes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Give As Offering</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Give As Donation</Text>
            </View>
          </TouchableOpacity>
          {pay && (
            <View style={{ flex: 1 }}>
              <Paystack
                paystackKey="pk_test_bbaa5b02968054dc8332e5c2fc4b566c84d08f4e"
                amount={amount}
                billingEmail={email ? email : ""}
                // billingMobile={billingDetail.billingMobile}
                billingName={name ? name : ""}
                activityIndicatorColor="green"
                onCancel={(e) => {
                  // handle response here
                  Toast.show("Transaction Cancelled!!", {
                    duration: Toast.durations.LONG,
                  });
                }}
                onSuccess={(response) => {
                  // handle response here

                  const responseObject = response.transactionRef;
                  // Use responseObject here

                  console.log(responseObject);
                  if (responseObject?.message === "Approved") {
                    Toast.show("Transaction Approved!!", {
                      duration: Toast.durations.LONG,
                    });
                  }
                }}
                autoStart={pay}
              />
            </View>
          )}
        </View>
      </RootSiblingParent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 15,
    borderColor: "#8a8a71",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#8a8a71",
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginHorizontal: 20,
    width: "100%",
    marginVertical: 10,
    marginBottom: 20
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
  },
});
{/* <View style={{margin: 10, position: 'relative'}}>
  <Image source={church} style={{ width: '100%', height: 330 }}/>
  <View style={{position: "absolute",  bottom: 10, left: 10, }}>
    <Text style={{color: Colors.WHITE,fontSize: 30, fontFamily: "poppinsBold"}}>Give to the Lord!</Text>
    <Text style={{color: Colors.SECONDARY_LIGHT, fontFamily:"crimsonItalic", fontSize: 20}}>And receive blessings immediately!</Text>
  </View>
</View> */}