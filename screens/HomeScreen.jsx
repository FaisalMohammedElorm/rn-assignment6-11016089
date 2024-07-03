import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "../Home";
import { CartContext } from "../CartContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { addToCart, getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  const clothesData = [
    {
      id: 1,
      image: require("../assets/dress1.png"),
      title: "Office Wear",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 2,
      image: require("../assets/dress2.png"),
      title: "Black",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 3,
      image: require("../assets/dress3.png"),
      title: "Church Wear",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 4,
      image: require("../assets/dress4.png"),
      title: " Lamerei",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 5,
      image: require("../assets/dress5.png"),
      title: " 21WN",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 6,
      image: require("../assets/dress6.png"),
      title: " Lopo",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 7,
      image: require("../assets/dress7.png"),
      title: "21WN",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
    {
      id: 8,
      image: require("../assets/dress6.png"),
      title: "lame",
      description: "reversible angora cardigan",
      price: "$120",
      icon: require("../assets/add_circle.png"),
      removeIcon: require("../assets/remove.png"),
    },
  ];

  return (
    <View style={{ backgroundColor: "white" }}> 
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginTop: 40,
        }}
      >
      {/** Top Container */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require("../assets/Menu.png")}  />
        </TouchableOpacity>

        <View>
          <Image source={require("../assets/Logo.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
              <SimpleLineIcons name="handbag" size={24} color="black" />
              {totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
            {/** Story Container */}
      <View style={styles.title}>
        <Text style={styles.topic}>OUR STORY</Text>
        <View style={styles.menu}>
          <View style={styles.filter}>
            <Image source={require("../assets/Listview.png")} />
          </View>
          <View style={styles.filter}>
            <Image source={require("../assets/Filter.png")} />
          </View>
        </View>
      </View>
            {/** FlatList Container */}
      <View style={{ paddingBottom: 400 }}>
        <FlatList
          data={clothesData}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-around",
            paddingBottom: 30,
          }}
          renderItem={({ item }) => (
            <Home
              image={item.image}
              icon={item.icon}
              removeIcon={item.removeIcon}
              title={item.title}
              description={item.description}
              price={item.price}
              onPressAdd={() => addToCart(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 100,
    marginTop: 40,
    marginRight: 60,
  },
  drawerMenu: {
    width: 20,
    height: 20,
    margin: 10,
    marginTop: 40,
    
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  topic: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 30,
    letterSpacing: 2,
  },
  filter: {
    padding: 10,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 20,
    marginTop: 30,
  },
  badge: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default HomeScreen;
