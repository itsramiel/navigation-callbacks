import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileProps } from "../navigation/types";
import { event } from "../event";

const Profile = ({ route }: ProfileProps) => {
  const { eventName } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="call passed callback" onPress={() => event.emit(eventName, "rami")} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
