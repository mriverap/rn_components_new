import {Alert, Button, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );

  const showPrompt = () => {
    //iOS only:
    //     Alert.prompt(
    //       'Are you sure?',
    //       'This action cannot be reverted',
    //       (value: string) => console.log('info: ', value),
    //       'plain-text',
    //       'Hello World',
    //       'number-pad',
    //     );
    //

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert Screen" />
      <Button title="Display Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Display Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
