import React from 'react';
import { Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import SearchScreen from '../search/SearchScreen';

const HomeNavigator = createBottomTabNavigator({
  Search: SearchScreen,
  Home: HomeScreen,
  Cook: SearchScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      switch (routeName) {
        case 'Home':
          return (
            <Image
              source={require('../../assets/icon_explore.png')}
              style={{ width: 25, height: 25, tintColor }}
              resizeMode="contain"
            />
          );
        case 'Search':
          return (
            <Image
              source={require('../../assets/icon_search.png')}
              style={{ width: 25, height: 25, tintColor }}
              resizeMode="contain"
            />
          );
        case 'Cook':
          return (
            <Image
              source={require('../../assets/icon_cook.png')}
              style={{ width: 25, height: 25, tintColor }}
              resizeMode="contain"
            />
          );
        default:
          return (
            <Image
              source={require('../../assets/icon_cook.png')}
              style={{ width: 25, height: 25, tintColor }}
              resizeMode="contain"
            />
          );
      }
    },
  }),
  tabBarPosition: 'top',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'rgb(48, 190, 118)',
    inactiveTintColor: '#363837',
    style: {
      backgroundColor: '#fff',
      height: 65,
    },
  },
});

export default HomeNavigator;
