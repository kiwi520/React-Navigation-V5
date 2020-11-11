/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 1. npm install @react-navigation/native
 * 2. npm install
 *  react-native-reanimated
 *  react-native-gesture-handler
 *  react-native-screens
 *  react-native-safe-area-context
 *  @react-native-community/masked-view
 * 3. 使用 createStackNavigator 导航器
 *    3.1 npm install @react-navigation/stack
 *
 import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

 function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
 *
 */
import React from 'react';
import {LogBox} from 'react-native';

import ContactsScreen from './src/screen/drawer/ContactsScreen';
import FavoritesScreen from './src/screen/drawer/FavoritesScreen';
import SettingsScreen from './src/screen/drawer/SettingsScreen';

import LeftTab from './src/screen/tabs/LeftTab';
import CenterTab from './src/screen/tabs/CenterTab';
import RightTab from './src/screen/tabs/RightTab';

import FeedScreen from './Feed';
import DetailScreen from './Detail';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//主题
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {enableScreens} from 'react-native-screens';
enableScreens();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

LogBox.ignoreLogs(['Require cycle:']);

const App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(45, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(255, 255, 255)',
      header: 'rgb(255, 255, 255)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            title: 'My Feed',
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
      </Stack.Navigator>
    );
  };

  const createTopTabs = (props) => {
    console.log(props);
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name={'left'}
          component={LeftTab}
          options={{title: props.route.params.name}}
        />
        <MaterialTopTabs.Screen name={'center'} component={CenterTab} />
        <MaterialTopTabs.Screen name={'right'} component={RightTab} />
      </MaterialTopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      // <MaterialBottomTabs.Navigator>
      //   <MaterialBottomTabs.Screen name={'left'} component={LeftTab} />
      //   <MaterialBottomTabs.Screen name={'center'} component={CenterTab} />
      //   <MaterialBottomTabs.Screen name={'right'} component={RightTab} />
      // </MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Navigator
        initialRouteName="LeftTab"
        activeColor="#e91e63"
        style={{backgroundColor: 'tomato'}}>
        <MaterialBottomTabs.Screen
          name={'left'}
          component={LeftTab}
          options={{
            tabBarLabel: 'LeftTab',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name={'center'}
          component={CenterTab}
          options={{
            tabBarLabel: 'CenterTab',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name={'right'}
          component={RightTab}
          options={{
            tabBarLabel: 'RightTab',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={ContactsScreen} />
          <Drawer.Screen name="Favorites" component={FavoritesScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
