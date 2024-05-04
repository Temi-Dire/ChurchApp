import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { church } from '../../../assets'
import { Colors } from '../../Utils/Colors'

export default function OfferingScreen() {
  return (
    <View>
      <Header />
      <View style={{margin: 10, position: 'relative'}}>
        <Image source={church} style={{ width: '100%', height: 330 }}/>
        <View style={{position: "absolute",  bottom: 10, left: 10, }}>
          <Text style={{color: Colors.WHITE,fontSize: 30, fontFamily: "poppinsBold"}}>Give to the Lord!</Text>
          <Text style={{color: Colors.SECONDARY_LIGHT, fontFamily:"crimsonItalic", fontSize: 20}}>And receive blessings immediately!</Text>
        </View>
      </View>
    </View>
  )
}