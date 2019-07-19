import React, { Component } from 'react';
import {
  View,
  Text, 
  Image, 
  StyleSheet, 
  Animated,
  Easing
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import LogoImage from '../assets/logo.png';

const TIME_OUT = 5000;

class SplashScreen extends Component {

    state = {
      animatedValue: new Animated.Value(0)
    }

    componentDidMount () {
        this._animated();
        this._initializeApp();
    }

    _animated = () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 2 * 1000,
        easing: Easing.linear
      }).start()
    }
    
    _initializeApp = () => {
        setTimeout(() => {
            this._navigateTo('Login')
        }, TIME_OUT)
    }

    
    _navigateTo = (routeName) => {
        const actionToDispatch = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }


  render() {
    const { animatedValue } = this.state;

    const animationStyles = {
      opacity: animatedValue
    };

    return (
          <View style={styles.container}>
              <View style={styles.content}>
                  <Animated.Image
                      source={LogoImage}
                      resizeMode="contain"
                      style={[styles.logo, animationStyles]}
                    />
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
