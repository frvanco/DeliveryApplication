import * as Font from "expo-font";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import ReceiveNotifications from "../component/Notifications";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <ReceiveNotifications />
    </SafeAreaView>
  );
}
