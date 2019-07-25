import React from 'react';
import { Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../feed/FeedScreen';
import SearchScreen from '../search/SearchScreen';
import ProfileScreen from '../profile/ProfileScreen';

const HomeNavigator = createBottomTabNavigator({
  Search: SearchScreen,
  Feed: FeedScreen,
  Cook: ProfileScreen,
}, {
  initialRouteName: 'Feed',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      switch (routeName) {
        case 'Feed':
          return (
            <Ionicons
              name="ios-paper"
              size={25}
              color={tintColor}
            />
          );
        case 'Search':
          return (
            <Ionicons
              name="ios-search"
              size={25}
              color={tintColor}
            />
          );
        case 'Cook':
          return (
            <Ionicons
              name="ios-person"
              size={25}
              color={tintColor}
            />
          );
        default:
          return (
            <Ionicons
              name="ios-search"
              size={25}
              color={tintColor}
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
