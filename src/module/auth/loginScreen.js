import React, { Component } from 'react';

import {
  View, Image, StyleSheet, Text, Dimensions,
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

class Login extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.subContent}>

          {/* header content */}
          <View style={styles.headerContent}>

            <Image
              source={require('../../assets/header_login.png')}
              style={styles.imageImage}
            />
            <View style={styles.logoContent}>

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

          {/* form content */}
          <View style={styles.formContent}>

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
                <View style={{ flex: 1 }} />
                <View style={styles.rectangleView}/>
              </View>
            </View>
            
            <View style={styles.buttonGroupView}>
              <Text style={styles.login}>Login</Text>
            </View>
            <View
              style={{ flex: 1 }}
            />
            <View style={styles.signUpView}>
              <Text style={styles.noAccount}>don't have an account ?</Text>
              <View style={{ flex: 1 }} />
              <Text style={styles.createAccout}>
                Create Account Here
              </Text>
            </View>

          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContent: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
  },
  headerContent: {
    width: '100%',
    height: screenWidth / 1.5,
  },
  logoContent: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 25,
    top: 60,
    alignItems: 'flex-start',
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
    bottom: 0,
  },
  logoView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupImage: {
    backgroundColor: 'transparent',
    height: 26,
    width: 26,
  },
  scratchText: {
    backgroundColor: 'transparent',
    color: 'rgb(54, 56, 55)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    letterSpacing: 0.4,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackText: {
    color: 'rgb(3, 15, 9)',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 1,
    backgroundColor: 'transparent',
    marginTop: 44,
  },

  formContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },

  pleaseLoginToContText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    marginTop: 30,
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

export default Login;
