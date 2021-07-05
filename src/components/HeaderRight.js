import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {COLOR} from '../themes/COLOR';
import styles from '../screens/AddProducts/AddProducts.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderRight = ({navigation}) => {
  const goToCreateProducts = () => {
    navigation.navigate('Create Product');
  };

  return (
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <View style={{margin: 10, marginRight: 15}}>
        <AntDesign size={18} name="search1" color={COLOR.GREY} />
      </View>
      <TouchableOpacity
        onPress={goToCreateProducts}
        style={styles.createProductContainer}>
        <AntDesign size={18} name="pluscircle" color={COLOR.GREEN} />
        <Text style={styles.createProduct}> Create products </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HeaderRight;
