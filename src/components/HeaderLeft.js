import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../themes/COLOR';
import styles from '../screens/AddProducts/AddProducts.style';

const HeaderLeft = () => {
  return (
    <View style={{marginLeft: 10, flexDirection: 'row'}}>
      <View style={{marginTop: 2}}>
        <Ionicons size={22} name="arrow-back" color={COLOR.GREY} />
      </View>
      <Text style={styles.addProductText}>Add Products</Text>
    </View>
  );
};

export default HeaderLeft;
