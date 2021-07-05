import React from 'react';
import {View, SafeAreaView, SectionList} from 'react-native';
import styles from './EditProducts.style';
import {DATA} from '../../data/AddProductsData';
import CategoryComponent from '../../components/CategoryComponent';
import SubCategoryComponent from '../../components/SubCategoryComponent';

const EditProducts = ({route}) => {
  const item = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <SubCategoryComponent item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <CategoryComponent title={title} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default EditProducts;
