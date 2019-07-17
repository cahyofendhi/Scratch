import React, { Component } from 'react';

import {
  View, Image, StyleSheet, Text,
} from 'react-native';


export default class Login extends Component {

  componentDidMount() {}

  render() {
    return (
      <View style={styles.loginView}>
        <View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
          }}
        >
          <View style={styles.inputTwoView}>
            <Text style={styles.labelTwoText}>
                Email address
            </Text>
            <Text style={styles.email}>
                user@email.com
            </Text>
            <View
              style={{ flex: 1 }}
            />
            <View
              style={styles.rectangleTwoView}
            />
          </View>
        </View>
        <View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 123,
          }}
        >
          <View
            pointerEvents="box-none"
            style={{ height: 285 }}
          >
            <Image
              source={require('../../assets/header_login.png')}
              style={styles.imageImage}
              resizeMode="cover"
            />
            <View
              pointerEvents="box-none"
              style={{
                position: 'absolute',
                left: 25,
                width: 170,
                top: 60,
                height: 105,
                alignItems: 'flex-start',
              }}
            >
              <View style={styles.logoView}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={styles.groupImage}
                  resizeMode="contain"
                />
                <Text style={styles.scratchText}>Scratch</Text>
              </View>
              <Text style={styles.welcomeBackText}>Welcome Back!</Text>
            </View>
          </View>
          <Text style={styles.pleaseLoginToContText}>
                Please login to continue.
          </Text>
          <View
            pointerEvents="box-none"
            style={{
              height: 66,
              marginLeft: 25,
              marginRight: 25,
              marginTop: 142,
            }}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            <View style={styles.inputView}>
              <Text style={styles.labelText}>Password</Text>
              <Text style={styles.password}>●●●●●●●●</Text>
              <View style={{flex: 1}}/>
              <View
                style={styles.rectangleView}
              />
            </View>
          </View>
          <View style={styles.buttonGroupView}>
            <Text style={styles.login}>Login</Text>
          </View>
          <View
            style={{ flex: 1,}}
          />
          <View style={styles.signUpView}>
            <Text style={styles.noAccount}>don't have an account ?</Text>
            <View style={{ flex: 1}}/>
            <Text style={styles.createAccout}>
                Create Account Here
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputTwoView: {
    backgroundColor: 'transparent',
    height: 65,
    marginLeft: 25,
    marginRight: 25,
  },
  labelTwoText: {
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  email: {
    backgroundColor: 'transparent',
    color: 'rgb(3, 15, 9)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    marginRight: 207,
    marginTop: 16,
  },
  rectangleTwoView: {
    backgroundColor: 'rgb(204, 204, 204)',
    height: 1,
  },
  imageImage: {
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 285,
  },
  logoView: {
    backgroundColor: 'transparent',
    width: 102,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupImage: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 26,
    marginRight: 10,
  },
  scratchText: {
    backgroundColor: 'transparent',
    color: 'rgb(54, 56, 55)',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 20,
    letterSpacing: 0.4,
    paddingTop: 8,
    flex: 1,
    marginLeft: 10,
    marginRight: 4,
  },
  welcomeBackText: {
    color: 'rgb(3, 15, 9)',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 32,
    paddingTop: 1,
    backgroundColor: 'transparent',
    marginTop: 44,
  },
  pleaseLoginToContText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 19,
  },
  forgotPasswordText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  inputView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 1,
    height: 65,
  },
  labelText: {
    backgroundColor: 'transparent',
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  password: {
    color: 'rgb(3, 15, 9)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    backgroundColor: 'transparent',
    marginRight: 251,
    marginTop: 16,
  },
  rectangleView: {
    backgroundColor: 'rgb(204, 204, 204)',
    height: 1,
  },
  buttonGroupView: {
    backgroundColor: 'rgb(48, 190, 118)',
    borderRadius: 8,
    shadowColor: 'rgba(13, 51, 32, 0.1)',
    shadowRadius: 20,
    shadowOpacity: 1,
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
    justifyContent: 'center',
  },
  login: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 21,
    paddingTop: 1,
    marginLeft: 141,
    marginRight: 141,
  },
  signUpView: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    width: 174,
    height: 45,
    marginRight: 98,
  },
  noAccount: {
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 22,
    backgroundColor: 'transparent',
    marginLeft: 35,
    marginRight: 35,
  },
  createAccout: {
    backgroundColor: 'transparent',
    color: 'rgb(48, 190, 118)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.32,
    marginLeft: 9,
    marginRight: 4,
  },
});
