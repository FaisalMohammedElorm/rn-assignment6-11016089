import { View, Text , StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { CheckOut } from '../mock/CheckOut';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <TouchableOpacity>        
            <AntDesign name="search1" size={24} color="black" style={styles.iconSearch} />
          </TouchableOpacity>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>CHECKOUT</Text>
      </View>
      <View style={styles.flat}>
        <FlatList
          data={CheckOut}
          renderItem={( {item} ) => (
          <View>
            <View>
              <Image source={item.image}  />
            </View>
              <View style={styles.itemTextContainer}>
                <Text>{item.title}</Text>
                <Text>{item.subTitle}</Text>
                <Text>{item.price}</Text>
              </View>
              <View>
                <Image source={item.icon}  />
              </View>
          </View>
          )}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:20,
  },
  logoContainer:{
    marginTop:30,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    position:"absolute"
  },
  iconSearch:{
    marginLeft:360
  },
  checkContainer:{
    top:50,
    alignItems:"center"
  },
  checkText:{
    fontSize:30,
    fontWeight:"600",
    fontStyle:"italic",
    letterSpacing: 2.5,
  },
  flat:{
    top:90,
  }

});
export default CartScreen
    
   
    
    
    

