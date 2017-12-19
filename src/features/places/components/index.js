import React, { Component } from "react";
import { List } from 'react-native-elements'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";

import PlaceList from "./PlaceList";
import Header from "./Header";
import Footer from "./Footer";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  content: {
    flex: 0,
    alignItems: "center"
  }
});

const Places = props => (
  <View style={styles.root}>
    <Header onAdd={props.addItem} />
    <ScrollView contentContainerStyle={styles.content}>
      <List>
        <PlaceList places={props.places} onSelectItem={props.onToggleItem} />
      </List>
    </ScrollView>
    <Footer onSelectFilter={props.updateFilter} selected={props.filter} />
  </View>
);
export default Places;
