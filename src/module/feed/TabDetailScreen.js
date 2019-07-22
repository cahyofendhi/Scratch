import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import ItemTab from './ItemTab';

const TabDetailScreen = () => (
  <View style={{ flex: 1 }}>
    <IndicatorViewPager
      style={styles.viewPagerContainer}
      indicator={(
        <PagerTitleIndicator
          style={styles.indicatorContainer}
          itemTextStyle={styles.indicatorText}
          selectedItemTextStyle={styles.indicatorSelectedText}
          selectedBorderStyle={styles.selectedBorderStyle}
          titles={['Ingredient', 'How to cook', 'Additional']}
        />
        )}
    >
      <View>
        <ItemTab />
      </View>
      <View>
        <ItemTab />
      </View>
      <View>
        <ItemTab />
      </View>
    </IndicatorViewPager>
  </View>
);

const styles = StyleSheet.create({
  viewPagerContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  indicatorContainer: {
    backgroundColor: 'white',
    height: 48,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  indicatorText: {
    fontSize: 14,
    color: 'rgba(3, 15, 9, 0.4)',
    paddingLeft: 10,
    paddingRight: 10,
  },
  indicatorSelectedText: {
    fontSize: 14,
    color: 'rgba(3, 15, 9, 1)',
    paddingLeft: 10,
    paddingRight: 10,
  },
  selectedBorderStyle: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'rgba(48, 190, 118, 1)',
  },
});

export default TabDetailScreen;
