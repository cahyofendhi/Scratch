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

  constructor(props){
    super(props)
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  updateSearch = query => {
    var newData = this.state.dataOri;
    newData = this.state.dataOri.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = query.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query,
      data: newData
    });
  };

  updateExpanded = (item) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState(prevState => {
      // find index of element
      const indexOfElement = prevState.data.findIndex(s => s.id === item.id);
      if(indexOfElement > -1) {
        // if element exists copy the array...
        const sitesCopy = [...prevState.data];
        // ...and update the object
        sitesCopy[indexOfElement].isExpanded = !item.isExpanded;
        return { data: sitesCopy }
      } 
      // there was no element with a given key so we don't update anything
    })
  }

  render() {

    const { data, query } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.content}>
          <SearchBar
            containerStyle={{
              backgroundColor: '#F7F7F7',
            }}
            lightTheme={true}
            inputContainerStyle={{
              backgroundColor: '#F2F2F2'
            }}
            inputStyle={{
              color: '#030F09'
            }}
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
                  expanded= {() => this.updateExpanded(item)}
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
    backgroundColor: "#F7F7F7"
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    left: 0, 
    right: 0
  },
  resultView: {
    flex: 1,
    flexDirection: 'column',
  }
};


export default SearchScreen;
