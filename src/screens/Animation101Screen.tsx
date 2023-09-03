import {Animated, Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAnimation} from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(-100);
          }}
        />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
