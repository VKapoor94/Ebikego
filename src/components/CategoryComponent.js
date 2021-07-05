import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screens/AddProducts/AddProducts.style';

const CategoryComponent = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default CategoryComponent;
