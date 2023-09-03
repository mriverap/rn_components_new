import {View, Text, Button, Modal} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal
        animationType="fade"
        visible={isVisible}
        //   transparent={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Modal Content */}
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 50,
              paddingBottom: 20,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <HeaderTitle title="Modal" />
            <Text style={{marginBottom: 20}}>Body of modal</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
