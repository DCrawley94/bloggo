import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile Page")}
        style={styles.navbarBtn}
      >
        <Text style={styles.text}>Username</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("My Trips")}
        style={styles.navbarBtn}
      >
        <Text style={styles.text}>My Trips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarBtn}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#0096c7",
    color: "white",
    flexDirection: "row",
    paddingVertical: 5,
  },
  navbarBtn: {
    
  },
  text: {
    color: "white"
  }
});

export default NavBar;
