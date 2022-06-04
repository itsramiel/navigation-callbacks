import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeProps } from "../navigation/types";

const Home = ({ navigation }: HomeProps) => {
  const congratulateUser = () => {
    Alert.alert("Here is a congratulations for following this tutorial and this function is written in Home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="go to profile" onPress={() => navigation.navigate("Profile", { callback: congratulateUser })} />
    </View>
  );
};

export default Home;
