import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../auth/LoginScreen';
import HomeNavigator from './HomeNavigator';

const MainNavigator = createStackNavigator({
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
});

export default createAppContainer(MainNavigator);
