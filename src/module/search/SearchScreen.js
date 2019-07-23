import React, { Component } from 'react';
import { View,
         Text,
         Platform,
         FlatList,
         StatusBar,
         UIManager,
         Dimensions,
         SafeAreaView,
         LayoutAnimation } from 'react-native';
import Sample from '../../component/sample';
import { SearchBar } from 'react-native-elements';
import ItemSearch from './ItemSearch';

class SearchScreen extends Component {

  state = {
    query: "",
    data: Sample.dataFeed,
    dataOri: Sample.dataFeed,
  }

  updateSearch = query => {
    var newData = this.state.dataOri;
    newData = this.state.dataOri.filter(item => {
      const itemData = item.toLowerCase();
      const textData = query.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query,
      data: newData
    });
  };

  render() {

    const { data, query } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.content}>
          <SearchBar
            containerStyle={{
              backgroundColor: 'white',
            }}
            lightTheme={true}
            inputContainerStyle={{
              backgroundColor: '#F7F7F7'
            }}
            round={true}
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={query}
          />
          <View style={styles.resultView}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => 
                <ItemSearch
                  index= {index}
                  item= {item}
                />
              }
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: '100%', 
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    left: 0, 
    right: 0
  },
  resultView: {
    flex: 1,
    width: '100%'
  }
};


export default SearchScreen;
