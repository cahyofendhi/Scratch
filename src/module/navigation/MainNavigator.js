import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../SplashScreen';
import LoginScreen from '../auth/loginScreen';
import HomeNavigator from './HomeNavigator';
import DetailFeedScreen from '../feed/DetailFeedScreen';
import StepCook from '../feed/StepCook';
import ChatScreen from '../chat/ChatScreen';

const MainNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
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
  initialRouteName: 'Splash',
  navigationOptions: {
    header: {
      visible: false,
    },
  },
});

export default createAppContainer(MainNavigator);
