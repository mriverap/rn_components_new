import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {items} from '../data/flatListData';
import Icon from 'react-native-vector-icons/Ionicons';

import {FlatListItem} from '../interfaces/appInterfaces';

interface Props {
  item: FlatListItem;
}

const renderItem = ({item}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Icon name={item.icon} size={23} color="grey" />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{flex: 1}} />
      <View style={styles.stateContainer}>
        <Text style={styles.stateText}>{item.state}</Text>
      </View>
    </View>
  );
};

const FilteredFlatListScreen = () => {
  const [isActive, setIsActive] = useState('All');

  const FilterBar = () => {
    const filters = ['All', 'Pending', 'In progress', 'Completed'];

    return (
      <View style={styles.filterBar}>
        {filters.map((item: string) => {
          return (
            <TouchableOpacity
              style={[
                styles.filterButton,
                isActive === item && styles.buttonActive,
              ]}
              onPress={() => setIsActive(item)}>
              <Text
                style={[
                  styles.buttonText,
                  isActive === item && styles.buttonTextActive,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FilterBar />
        <FlatList
          data={items.filter((item: FlatListItem) => {
            return isActive === 'All' ? item : item.state === isActive;
          })}
          renderItem={({item}) => renderItem({item})}
          keyExtractor={item => item.name}
        />
      </View>
    </>
  );
};

export default FilteredFlatListScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 30,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 25,
    marginRight: 50,
    fontWeight: 'bold',
  },
  stateText: {
    opacity: 0.5,
    fontSize: 12,
  },
  stateContainer: {
    alignItems: 'center',
  },
  filterBar: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#D8D7D6',
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  buttonText: {
    color: 'black',
  },
  buttonActive: {
    backgroundColor: '#0078D7',
  },
  buttonTextActive: {
    color: 'white',
  },
});
