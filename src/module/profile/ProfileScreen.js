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

// eslint-disable-next-line react/prefer-stateless-function
const width = Dimensions.get('window').width;
const customHeight = width/2;

class ProfileScreen extends Component {
  
  state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  } 


  render() {
    const { data } = this.state

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

             <Image
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
                <Ionicons
                    name='ios-list'
                    size={30}
                    color='rgba(96, 96, 96, 0.5)'
                />

                <Ionicons
                    style={styles.iconGrid}
                    name='ios-grid'
                    size={30}
                    color='rgba(96, 96, 96, 1)'
                />
            </View>
            
            <Ionicons
                name='ios-add'
                size={30}
                color='rgba(96, 96, 96, 1)'
            />

        </View>

        <FlatList
            contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: 100,
            }}
            data={data}
            renderItem={({item, index}) => 
            <TouchableOpacity  
                    style={{
                        margin: 10,
                    }}>      
                <Image 
                    style={{
                        width: customHeight - 35, 
                        height: customHeight - 35,
                        borderRadius: 25
                    }}
                    resizeMode = 'cover'
                    source={SampleFood}/>
            </TouchableOpacity>
            }
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
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
  }
});

export default ProfileScreen;