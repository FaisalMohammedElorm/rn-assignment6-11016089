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
            <AntDesign name="search1" size={28} color="black" style={styles.iconSearch} />
          </TouchableOpacity>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>CHECKOUT</Text>
      </View>
      <View style={styles.flat}>
        <FlatList
          data={CheckOut}
          renderItem={( {item} ) => (
          <View style={styles.checkList}>
            <TouchableOpacity>
              <Image source={item.image} style={styles.flatImage} />
            </TouchableOpacity>
              <View style={styles.itemTextContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.subText}>{item.subTitle}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
              <TouchableOpacity style={[styles.removeIcon, item.iconStyle]}>
                <Image source={item.icon}  />
              </TouchableOpacity>
          </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
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
  },
  itemTextContainer:{
   flexDirection:"column",
   marginLeft:12,
   top:65
  },
  titleText:{
    fontSize:25,
    letterSpacing: 2.5,
    fontStyle:"italic",
    fontWeight:"500",
  },
  subText:{
    color:"gray",
    fontSize:12,
    fontWeight:"500",
  },
  priceText:{
    color:"red",
    fontWeight:"700",
  },
  flatImage:{
    borderRadius:10
  },
  checkList:{
    flexDirection:"row",
    margin:5
  },
  removeIcon:{
    top:180,
    right:20
  }

});
export default CartScreen
   
    
   
    
    
    

