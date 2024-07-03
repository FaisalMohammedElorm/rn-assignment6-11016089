import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const CartsClothes = ({
  image,
  title,
  description,
  price,
  icon,
  onPressRemove,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>{price}</Text>
        <TouchableOpacity onPress={onPressRemove} style={styles.icons}>
          <Image source={icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginBottom: 15,
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    position: "relative",
    marginBottom: 15,
    marginTop: 30,
  },
  title: {
    fontWeight: "400",
    letterSpacing: 2,
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  amount: {
    color: "brown",
    marginTop: 10,
  },
  icons: {
    marginTop: 40,
    marginRight: 20,
    alignItems: "flex-end",
  },
  text: {
    marginRight: 30,
    marginLeft: 10,
  },
  icon: {},
});

export default CartsClothes;
