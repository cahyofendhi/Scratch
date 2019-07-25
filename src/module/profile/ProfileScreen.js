import React, { Component } from 'react';
import {
        StyleSheet,
        Text,
        View, 
        Image, 
        TouchableOpacity, 
        Animated, 
        ScrollView, 
        FlatList,
        Dimensions,
} from 'react-native';

import Avatar from '../../assets/sample_avatar.png';
import SampleFood from '../../assets/sample_food.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePress from '../../component/ImagePress';

// eslint-disable-next-line react/prefer-stateless-function
const width = Dimensions.get('window').width;
const customHeight = width/2;

class ProfileScreen extends Component {
  
  state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isList: false,
  } 

  handlingModeGallery = (isList) => {
    this.setState({
      isList : isList
    })
  }

  render() {
    const { data, isList, opacity } = this.state
    const imageStyle = {
      width: isList ? width - 10 : customHeight - 35,
      height: isList ? customHeight : customHeight - 35,
      borderRadius: 10
    }

    return (
      <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerView}>
          <Text style={styles.name}>Nisya Sabyan</Text>
          <Text style={styles.title}>Master Chieft</Text>
          <View style={styles.profileContent}>

             <View style={styles.descriptionContent}>
                <Text style={styles.valueView}>125K</Text>
                <Text style={styles.descriptionView}>Follow</Text>
             </View>

             <ImagePress
                source={Avatar}
                resizeMode="cover"
                style={styles.avatar}
             />

             <View style={styles.descriptionContent}>
                <Text style={styles.valueView}>125K</Text>
                <Text style={styles.descriptionView}>POST</Text>
             </View>   

          </View>
        </View>

        <View style={styles.headerList}>

            <View style={styles.listMode}>
                <TouchableOpacity onPress={() => this.handlingModeGallery(true)}>
                  <Ionicons
                      name='ios-list'
                      size={30}
                      color= {isList ? 'rgba(96, 96, 96, 1)' : 'rgba(96, 96, 96, 0.5)'}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handlingModeGallery(false)}>
                  <Ionicons
                      style={styles.iconGrid}
                      name='ios-grid'
                      size={30}
                      color= {isList ? 'rgba(96, 96, 96, 0.5)' : 'rgba(96, 96, 96, 1)'}
                  />
                </TouchableOpacity>
            </View>
            
            <Ionicons
                name='ios-add'
                size={30}
                color='rgba(96, 96, 96, 1)'
            />

        </View>

        <FlatList
            key={(isList ? 'l' : 'g')}
            contentContainerStyle={styles.listView}
            data={data}
            renderItem={({item, index}) => 
            <View style={styles.imageContent}>      
                <ImagePress 
                    style={imageStyle}
                    resizeMode = 'cover'
                    source={SampleFood}/>

            </View>
            }
            numColumns={ isList ? 1 : 2 }
            horizontal={false}
            keyExtractor={(item, index) =>  index.toString()}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  headerView: {
    flex: 1,
    flexDirection: 'column',
    left: 0,
    right: 0,
    top: 0,
    padding: 10,
    alignItems: 'center',
  },
  name: {
    color: 'rgba( 3, 15, 9, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  title: {
    color: 'rgba( 168, 168, 168, 0.7)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    flex: 1/3,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  headerList: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listMode: {
    flexDirection: 'row',
  },
  iconGrid: {
    marginLeft: 20
  },
  listView: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  profileContent: {
    marginTop: 20,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  valueView: {
    color: 'rgba( 3, 15, 9, 1)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionView: {
    color: 'rgba( 3, 15, 9, 0.5)',
    fontSize: 16,
  },
  descriptionContent: {
    flex: 1/3,  
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContent: {
    margin: 10,
  }
});

export default ProfileScreen;
