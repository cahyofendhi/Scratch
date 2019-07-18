import React, { Component } from 'react';
import {
 View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import ItemFeed from './ItemFeed';

class FeedScreen extends Component {

  state = {
    data : [1, 2, 3, 4, 5, 6, 7]
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ height: 50 }} />

        {/* header */}
        <View style={styles.nav}>

          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />

          <View style={styles.menu}>
            <Image
              style={styles.iconNotif}
              source={require('../../assets/icon_notif.png')}
              resizeMode="contain"
            />

            <Image
              style={styles.iconMessage}
              source={require('../../assets/icon_message.png')}
              resizeMode="contain"
            />

          </View>

        </View>

        {/* <View style={styles.listContainer}> */}
          <FlatList
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
    backgroundColor: 'white',
  },
  nav: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,

  },
  logo: {
    width: 35,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconNotif: {
    padding: 10,
    marginRight: 10,
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
