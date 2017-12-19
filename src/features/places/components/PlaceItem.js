import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  item: {
    width: 200,
    fontSize: 32
  },
  itemVisited: {
    textDecorationLine: "line-through"
  }
});

const Item = props => {
  const itemStyle = props.visited
    ? [styles.item, styles.itemVisited]
    : styles.item;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ListItem
        roundAvatar
        containerViewStyle={{width: 250, margin: 'auto', backgroundColor: 'transparent'}}
        title={
          <View style={itemStyle}>
            <Text style={itemStyle}>{props.label}</Text>
          </View>
        }
      />
    </TouchableOpacity>
  );
};

export default Item;
