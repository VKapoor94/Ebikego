import React from 'react';
import {StyleSheet} from 'react-native';
import {COLOR} from '../../themes/COLOR';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  pbt: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: COLOR.GREY,
  },
  unbranded: {
    marginTop: 8,
    color: COLOR.GREY,
  },
  branded: {
    color: COLOR.Dark_GREEN,
    marginTop: 8,
  },
  addproductimg: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLOR.GREEN,
    marginLeft: 8,
  },
  productName: {
    height: 43,
    borderColor: COLOR.LIGHTGREYSHADE,
    borderWidth: 1,
    paddingLeft: 18,
    marginRight: 10,
    borderRadius: 5,
  },
  price: {
    height: 40,
    width: '140%',
    borderColor: COLOR.LIGHTGREYSHADE,
    borderWidth: 1,
    paddingLeft: 18,
    marginRight: 10,
    borderRadius: 5,
  },
  containerDropdown: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 18,
    marginLeft: 10,
  },

  SquareShapeView: {
    width: '95%',
    height: 40,
    borderColor: COLOR.LIGHTGREYSHADE,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  SquareShapeViewunit: {
    width: '79%',
    height: 40,
    borderColor: COLOR.LIGHTGREYSHADE,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    marginLeft: 30,
  },
  containerDropdownunit: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 13,
    marginLeft: 10,
  },

  brand: {
    fontSize: 15,
    fontWeight: 'normal',
    color: COLOR.LIGHTGREYSHADE,
    margin: 6,
    marginLeft: 18,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: COLOR.GREEN,
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginTop: 13,
    marginLeft: 10,
    marginRight: 18,
    marginBottom: 15,
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
});
