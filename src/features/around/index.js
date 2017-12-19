import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default class Around extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: 
      [
        {
          lnglat: {
            latitude: 48.862725,
            longitude: 2.287592000000018,
          }
        },
        {
          lnglat: {
            latitude: 38.7222524,
            longitude: -9.139336599999979, 
          }
        },
        {
          lnglat: {
            latitude: 41.9027835,
            longitude: 12.496365500000024, 
          }
        },
        {
          lnglat: {
            latitude: 50.8503396,
            longitude: 4.351710300000036, 
          }
        }
      ] 
    };  
  }

  render() {
    console.log(this.state.markers);
    const { markers } = this.state;

    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
        >
          {markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker.lnglat}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
