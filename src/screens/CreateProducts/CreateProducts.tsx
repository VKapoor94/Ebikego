import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './CreateProducts.style';
import {RadioButton} from 'react-native-paper';
import {COLOR} from '../../themes/COLOR';
import ImagePickerComponent from '../../components/ImagePickerComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreateProducts = () => {
  const [brandType, setBrandType] = useState('Branded');
  const [productName, setProductName] = React.useState('');
  const [brand, setBrand] = React.useState('Select Category');
  const [subCategory, setSubCategory] = React.useState('Select Subcategory');
  const [price, setPrice] = React.useState('');
  const [unit, setUnit] = React.useState('Select unit');
  const [qty, setQty] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pbt}>Product Brand Type</Text>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => setBrandType('Branded')}
          style={{flexDirection: 'row'}}>
          <RadioButton
            value="Branded"
            status={brandType === 'Branded' ? 'checked' : 'unchecked'}
            uncheckedColor={COLOR.GREY}
            onPress={() => setBrandType('Branded')}
            color={COLOR.Dark_GREEN}
          />
          <Text
            style={brandType === 'Branded' ? styles.branded : styles.unbranded}>
            Branded
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 5}}
          onPress={() => setBrandType('UnBranded')}>
          <RadioButton
            value="UnBranded"
            status={brandType === 'UnBranded' ? 'checked' : 'unchecked'}
            uncheckedColor={COLOR.GREY}
            onPress={() => setBrandType('UnBranded')}
            color={COLOR.Dark_GREEN}
          />
          <Text
            style={
              brandType === 'UnBranded' ? styles.branded : styles.unbranded
            }>
            UnBranded
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ImagePickerComponent />
        <Text style={styles.addproductimg}>Add Product Images (upto 2)</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 12}}>
        <TextInput
          style={styles.productName}
          onChangeText={text => setProductName(text)}
          value={productName}
          placeholder="Product Name"
        />
      </View>
      <View style={styles.containerDropdown}>
        <View style={styles.SquareShapeView}>
          <Text style={styles.brand}>{brand}</Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginBottom: 10,
              marginRight: 10,
            }}>
            <AntDesign name="down" size={18} color={COLOR.LIGHTGREYSHADE} />
          </View>
        </View>
      </View>
      <View style={styles.containerDropdown}>
        <View style={styles.SquareShapeView}>
          <Text style={styles.brand}>{subCategory}</Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginBottom: 10,
              marginRight: 10,
            }}>
            <AntDesign name="down" size={18} color={COLOR.LIGHTGREYSHADE} />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginHorizontal: 10, marginTop: 12}}>
          <TextInput
            style={styles.price}
            onChangeText={text => setPrice(text)}
            value={price}
            placeholder="Enter Price"
          />
        </View>
        <View style={styles.containerDropdownunit}>
          <View style={styles.SquareShapeViewunit}>
            <Text style={styles.brand}>{unit}</Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginBottom: 10,
                marginRight: 10,
              }}>
              <AntDesign name="down" size={18} color={COLOR.LIGHTGREYSHADE} />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 12}}>
        <TextInput
          style={styles.productName}
          onChangeText={text => setQty(text)}
          value={qty}
          placeholder="Enter Quantity"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateProducts;
