import {View, Switch, Platform, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}
const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
