import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileProps } from "../navigation/types";

const Profile = ({ route }: ProfileProps) => {
  const { callback } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="call passed callback" onPress={callback} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
