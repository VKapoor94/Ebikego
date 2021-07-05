import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddProducts from './src/screens/AddProducts/AddProducts';
import {COLOR} from './src/themes/COLOR';
import CreateProducts from './src/screens/CreateProducts/CreateProducts';
import HeaderLeft from './src/components/HeaderLeft';
import HeaderRight from './src/components/HeaderRight';
import EditProducts from './src/screens/EditProducts/EditProducts';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddProducts"
          component={AddProducts}
          options={({navigation, route}) => ({
            title: '',
            headerStyle: {
              backgroundColor: COLOR.WHITE,
            },
            headerTintColor: COLOR.GREY,
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'left',
            },
            headerRight: () => <HeaderRight navigation={navigation} />,
            headerLeft: () => <HeaderLeft />,
          })}
        />
        <Stack.Screen
          name="Create Product"
          component={CreateProducts}
          options={({navigation, route}) => ({
            title: 'Create Product',
            headerStyle: {
              backgroundColor: COLOR.WHITE,
              height: 46,
            },
            headerTintColor: COLOR.GREY,
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'left',
            },
          })}
        />
        <Stack.Screen
          name="Edit Product"
          component={EditProducts}
          options={({navigation, route}) => ({
            title: 'Edit Product',
            headerStyle: {
              backgroundColor: COLOR.WHITE,
              height: 46,
            },
            headerTintColor: COLOR.GREY,
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'left',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
