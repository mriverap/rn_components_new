import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';
import {useForm} from '../hooks/useForm';

const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={styleSheet.inputStyle}
              placeholder="Enter your name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styleSheet.inputStyle}
              placeholder="Enter your email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Text style={{fontSize: 16}}>Subscribed</Text>
              <CustomSwitch
                isOn={false}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <Text style={styleSheet.textFormat}>
              {JSON.stringify(form, null, 3)}{' '}
            </Text>
            <Text style={styleSheet.textFormat}>
              {JSON.stringify(form, null, 3)}{' '}
            </Text>

            <TextInput
              style={styleSheet.inputStyle}
              placeholder="Enter your phone"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="number-pad"
            />

            <Text style={styleSheet.textFormat}>
              {JSON.stringify(form, null, 3)}{' '}
            </Text>
            <View style={{height: 100}} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default TextInputScreen;

const styleSheet = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  textFormat: {
    fontSize: 24,
  },
});
