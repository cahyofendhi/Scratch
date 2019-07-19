import React, { Component } from 'react';

import {
  View, Image, StyleSheet, Text, Dimensions, TouchableOpacity
} from 'react-native';

import { TextField } from 'react-native-material-textfield';
import InputScrollView from 'react-native-input-scroll-view';

const screenWidth = Math.round(Dimensions.get('window').width);

class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
    }

    submitLogin = () => {
      this.props.navigation.navigate('MainHome')
    }

    render() {
        let { email, password } = this.state;

        return (
            <InputScrollView>
                <View style={styles.container}>

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

                        {/* email */}
                        <TextField
                            label='Email Address'
                            value={email}
                            tintColor = '#A8A8A8'
                            textColor = '#030F09'
                            keyboardType='email-address'
                            onChangeText={ (email) => this.setState({ email }) }
                        />

                        {/* password view */}
                        <View style={styles.passwordView}>
                            <TouchableOpacity style={styles.forgotView}>
                                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TextField
                                label='Password'
                                value={password}
                                tintColor = '#A8A8A8'
                                textColor = '#030F09'
                                secureTextEntry={true}
                                onChangeText={ (password) => this.setState({ password }) }
                            />
                        </View>
                        
                        <TouchableOpacity style={styles.buttonGroupView} onPress={() => this.submitLogin()}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.signUpView}>
                            <Text style={styles.noAccount}>don't have an account ?</Text>
                            <TouchableOpacity>
                                <Text style={styles.createAccout}>
                                    Create Account Here
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </InputScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
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

  rectangleTwoView: {
    backgroundColor: 'rgb(204, 204, 204)',
    height: 1,
  },
  imageImage: {
    width: '100%',
  },
  logoView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupImage: {
    height: 35,
    width: 35,
  },
  scratchText: {
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
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 30
  },

  passwordView: {
      marginTop: 10,
  },

  forgotView: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  forgotPasswordText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
  },

  password: {
    color: 'rgb(3, 15, 9)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
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
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
  },
  login: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 21,
  },
  signUpView: {
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40

  },
  noAccount: {
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 22,
  },
  createAccout: {
    color: 'rgb(48, 190, 118)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.32,
  },
});

export default LoginScreen;
