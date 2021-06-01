import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import dummydata from "./dummydata.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    // itemArray=['1','2','3','4','5','6','7','8']
    this.state = {
      FlatListItems: [
        { key: "1" },
        { key: "2" },
        { key: "3" },
        { key: "4" },
        { key: "5" },
        { key: "6" },
        { key: "7" },
        { key: "8" },
        { key: "9" },
        { key: "10" },
        { key: "11" },
        { key: "12" },
      ],
      dummyData: [
        { name: "A" },
        { name: "A" },
        { name: "A" },
        { name: "A" },
        { name: "A" },
        { name: "A" },
        { name: "A" },
        { name: "A" },
      ],
    };
  }

  componentDidMount() {
    let arr = this.state.dummyData.map((item, index) => {
      item.isSelected = false;
      return { ...item };
    });
    this.setState({ dummyData: arr });
    console.log("arr data ==>", arr);
  }

  selectionHandler = (ind) => {
    const { dummyData } = this.state;
    dummyData.map((item, index) => {
      if ((ind = index)) {
        item.isSelected = false;
      }
    });
  };

  renderRowItem = () => {
    return <Text>Test</Text>;
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Image
            style={{ width: "50%", height: "50%" }}
            source={require("./assets/kbc.jpg")}
          />
          <Text>Be a Millinore in no time</Text>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              backgroundColor: "green",
              borderWidth: 2,
              borderColor: "white",
              marginTop: 20,
            }}
          >
            <Text> PLAY</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              data={this.state.FlatListItems}
              //renderItem={this.renderRowItem}
              renderItem={({ item }) => (
                <Text style={styles.item}> {item.key} </Text>
              )}
            ></FlatList>
          </View>
          <StatusBar style="auto" />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {dummyData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this.selectionHandler()}
                  style={{
                    marginTop: 20,
                    height: 50,
                    width: 80,
                    borderRadius: 42,
                    backgroundColor: "green",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 25,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    {item.isSelected ? "selected" : "not selected"}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
