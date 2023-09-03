import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import type {StackScreenProps} from '@react-navigation/stack';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
const {width: screenWidth} = Dimensions.get('window');

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  const EnterButton = () => {
    return (
      <Animated.View style={opacity}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#5856D6',
            width: 150,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (isEnterButtonVisible.current) {
              navigation.navigate('Home');
            }
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Enter
          </Text>
          <Icon name="chevron-forward-outline" color="white" size={25} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const {opacity, fadeIn} = useAnimation();

  const isEnterButtonVisible = useRef(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
      }}>
      <Carousel
        //ref={(c)=>{this._carousel = c; }}
        data={items}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        renderItem={({item}: any) => renderItem(item)}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isEnterButtonVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856D6',
          }}
        />
        {activeIndex === 2 && <EnterButton />}
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
