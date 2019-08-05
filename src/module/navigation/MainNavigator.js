import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../SplashScreen';
import LoginScreen from '../auth/loginScreen';
import HomeNavigator from './HomeNavigator';
import DetailFeedScreen from '../feed/DetailFeedScreen';
import StepCook from '../feed/StepCook';
import ChatScreen from '../chat/ChatScreen';

const AppStack = createStackNavigator({
  MainHome: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null,
    },
  },
  DetailFeed: {
    screen: DetailFeedScreen,
    navigationOptions: {
      header: null,
    },
  },
  StepCook: {
    screen: StepCook,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      title: 'Chat',
      headerTintColor: 'rgb(54, 56, 55)',
      headerStyle: {
        backgroundColor: 'white',
      },
    },
  },
}, {
  headerMode: 'screen',
  initialRouteName: 'MainHome',
  navigationOptions: {
    header: {
      visible: false,
    },
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'Login',
});

const MainNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(MainNavigator);
