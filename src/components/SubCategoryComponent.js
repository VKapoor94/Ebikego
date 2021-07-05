import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../screens/AddProducts/AddProducts.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '../themes/COLOR';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const SubCategoryComponent = item => {
  const navigation = useNavigation();
  const selectSunCategory = () => {
    navigation.navigate('Edit Product', {item: item});
  };
  return (
    <TouchableOpacity onPress={selectSunCategory} style={styles.item}>
      <Image
        style={styles.logo}
        source={{
          uri: item.item.image,
        }}
      />
      <Text style={styles.title}>{item.item.name}</Text>
      <View style={styles.rightArrow}>
        <FontAwesome5 size={14} name="greater-than" color={COLOR.DARK_GREY} />
      </View>
    </TouchableOpacity>
  );
};

export default SubCategoryComponent;
