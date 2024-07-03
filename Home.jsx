import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ image, title, description, price, icon, onPressAdd }) => {
  return (
    <View>
      <View style={styles.image}>
        <Image source={image} />
        <TouchableOpacity onPress={onPressAdd}>
          <View style={styles.icons}>
            <Image source={icon} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.amount}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    position: "relative",
    marginBottom: 15,
    marginTop: 30,
  },
  title: {
    fontWeight: "500",
  },
  description: {},
  amount: {
    color: "brown",
  },
  icons: {
    position: "absolute",
    bottom: 5,
    right: 10,
    marginLeft: 0,
  },
  price: {},
  icon: {},
});

export default Home;
