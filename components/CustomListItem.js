import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://thumb.ac-illust.com/t/c1/c1607d6f2ba2f9eb5d6f6e5e50bd01e3_t.jpeg"
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>Youtube Chat</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
