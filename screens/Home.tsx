import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HomeProps } from "../navigation/types";
import { event } from "../event";

const Home = ({ navigation }: HomeProps) => {
  const congratulateUser = () => {
    Alert.alert("Here is a congratulations for following this tutorial and this function is written in Home");
  };

  useEffect(() => {
    event.on("congratulateUser", congratulateUser);

    return () => {
      event.off("congratulateUser", congratulateUser);
    };
  }, [congratulateUser]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="go to profile" onPress={() => navigation.navigate("Profile", { eventName: "congratulateUser" })} />
    </View>
  );
};

export default Home;
