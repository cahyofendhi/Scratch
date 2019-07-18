import React, { Component } from 'react';
import {
 View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';

import ItemFeed from './ItemFeed';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FeedScreen extends Component {

  state = {
    data : [1, 2, 3, 4, 5, 6, 7]
  }

  render() {

    let navTop = null
    if (Platform.OS == 'ios'){
      navTop = <View style={{ height: 20 }} />
    }

    return (
      <View style={styles.container}>

        {navTop}

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
            <TouchableOpacity>
              <Image
                style={styles.iconNotif}
                source={require('../../assets/icon_notif.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.iconMessage}
                source={require('../../assets/icon_message.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>

          </View>

        </View>

        {/* <View style={styles.listContainer}> */}
          <FlatList
            style={{top: 0, left: 0, right: 0, bottom: 0}}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => 
                <ItemFeed
                    data={item}
                    index={index}    
                />
            }
            keyExtractor={(item, index) => index.toString()}
          />
        {/* </View> */}

      </View>
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
    padding: 10,
    marginRight: 20,
  },
  iconMessage: {
    padding: 10,
  },

  // item
  listContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});


export default FeedScreen;
