import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;

const styles = StyleSheet.create({
  textItem: {
    fontSize: 12,
    backgroundColor: 'green',
    height: 150,
  },
});
