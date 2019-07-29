import React, { Component } from 'react';
import {
 View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Platform,
  Easing,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import ItemFeed from './ItemFeed';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FeedScreen extends Component {

  state = {
    data : [1, 2, 3, 4, 5, 6, 7],
    expanded: false,
    animation: new Animated.Value(0),
    max_height: 100,
    min_height: 0,
  }

  goToDetail = () => {
    this.props.navigation.navigate('DetailFeed')
  }

  _goToChat = () => {
    this.props.navigation.navigate('Chat')
  }

  _setMaxHeight(event){
    this.setState({
        max_height   : event.nativeEvent.layout.height
    });
  }

  _onFilter() {
    const { expanded, max_height, min_height, animation } = this.state

    const initialValue = expanded ? max_height : min_height;
    const finalValue = expanded ? min_height : max_height;
    animation.setValue(initialValue); 
    this.setState({
      expanded : !expanded 
    });
    
    if (expanded) {
      Animated.timing(animation,{
        toValue: finalValue,
    }).start(); 
    } else {
      Animated.spring(animation,{
          toValue: finalValue,
      }).start(); 
    } 
  }

  render() {
    const { expanded, animation } = this.state
    const body = `Filter Content\nFilter Content\nFilter Content\nFilter Content`
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.container}>
          {/* header */}
          <View style={styles.nav}>

            <View style={styles.logoView}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"/>
              <Text style={styles.scratchText}>Scratch</Text>
            </View>

            <View style={styles.menu}>
              <TouchableOpacity style={{padding: 10}}>
                <Ionicons
                  style={styles.iconNotif}
                  name='ios-notifications-outline'
                  size={30}
                  color='rgb(54, 56, 55)'
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconMessage} onPress={() => this._goToChat()}>
                <Evilicons
                  name='envelope'
                  size={30}
                  color='rgb(54, 56, 55)'
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconMessage} onPress={() => this._onFilter()}>
                <Ionicons
                  name='ios-list'
                  size={30}
                  color='rgb(54, 56, 55)'
                />
              </TouchableOpacity>

            </View>

          </View>
        
          <Animated.View
            style={[
              styles.expandView,
              { height: this.state.animation },
            ]}>
            <View style={styles.textFilterContent}>
              <Text>{body}</Text>
            </View>  
          </Animated.View>

          <FlatList
            style={{top: 0, left: 0, right: 0, bottom: 0}}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => 
                <ItemFeed
                    onPress={this.goToDetail}
                    data={item}
                    index={index}    
                />
            }
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  nav: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,

  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
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
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconNotif: {
    marginRight: 0,
  },
  iconMessage: {
    padding: 10,
  },

  // item
  listContainer: {
    paddingBottom: 10
  },

  expandView: { 
    flexDirection: 'row',
    backgroundColor: 'white',
    overflow:'hidden',
    flexWrap: "wrap"
  },

  textFilterContent: {
    flex: 1,
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingTop: 10, 
    paddingBottom: 20, 
    backgroundColor: '#F5F5F5', 
    color: 'black',
    width: '100%',
    flexWrap: "wrap"
  }

});


export default FeedScreen;
