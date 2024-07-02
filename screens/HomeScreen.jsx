import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StoryData } from '../mock/StoryData';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() =>  navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={require("../assets/Menu.png")} />
        </TouchableOpacity>
        <Image source={require("../assets/Logo.png")} />
        <View style={styles.searchShopContainer}>
          <AntDesign name="search1" size={24} color="black" />
          <Image source={require("../assets/shoppingBag.png")} style={{ marginLeft: 5 }} />
        </View>
      </View>
      <View style={styles.storyContainer}>
          <Text style={styles.storyText}>OUR STORY</Text>
          <FontAwesome name="th-list" size={24} color="black" style={{left:48}}/>
          <Ionicons name="filter" size={24} color="crimson" />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={StoryData}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.flatImage} />
                <Image source={item.icon} style={styles.flatIcon} />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.subText}>{item.subTitle}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    margin: 35,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchShopContainer: {
    flexDirection: "row",
  },
  storyContainer: {
    marginTop: 25,
    flexDirection:"row",
    justifyContent: "space-between",
  },
  storyText: {
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "italic",
    letterSpacing: 2.5,
  },
  flatIcon: {
    left: 135,
    bottom: 25,
  },
  itemContainer: {
    margin: 5,
  },
  flatImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom:20
  },
  subText: {
    color: "gray",
    bottom:20
  },
  priceText: {
    color: "red",
    bottom:20
  },
});

export default HomeScreen;
     
        
