import React from 'react';
import {StyleSheet} from 'react-native';
import {COLOR} from '../../themes/COLOR';

export default StyleSheet.create({
  createProduct: {
    color: COLOR.GREEN,
    fontSize: 12,
    fontWeight: 'bold',
  },
  createProductContainer: {
    flexDirection: 'row',
    width: 120,
    height: 36,
    marginRight: 12,
    borderColor: COLOR.GREEN,
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  addProductText: {
    fontSize: 20,
    color: COLOR.GREY,
    fontWeight: 'bold',
    width: 200,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  item: {
    backgroundColor: COLOR.WHITE,
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
  },
  headerContainer: {
    backgroundColor: COLOR.GREENISH,
    height: 35,
  },
  header: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 6,
    color: COLOR.Dark_GREEN,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
    color: COLOR.GREY,
    marginTop: 17,
    marginLeft: 13,
    fontWeight: 'bold',
    width: 150,
  },
  logo: {
    width: 66,
    height: 58,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    borderRadius: 15,
  },
  rightArrow: {
    marginTop: 19,
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 7,
  },
});
