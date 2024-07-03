import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";


const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("./assets/Menu.png")}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </TouchableOpacity>
          );
        },
      })}
    >
     
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
export default Navigation;
