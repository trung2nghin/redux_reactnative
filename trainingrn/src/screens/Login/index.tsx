import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '../../nav/RootStack';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
  },
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const LoginScreen = () => {
  const testPush = () => {
    PushNotification.localNotification({
      channelId: 'channel-id', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      title: 'Notification', // (optional)
      message: 'Login succesfully', // (required)
    });
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  const func = () => {
    navigate('HomeScreen');
    testPush();
  };

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <KeyboardAvoidingView style={styles.keyboardView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#3F414E' }}>Welcome Back!</Text>
          <View>
            <TextInput placeholder="Email address" autoFocus={true} style={styles.emailInput} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.passwordInput} />
          </View>
          <TouchableOpacity onPress={func} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>LOG IN</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#3F414E' }}>
                Forgot password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#A1A4B2' }}>
                ALREADY HAVE AN ACCOUNT? SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  mainView: {
    alignItems: 'center',
    width: width,
    height: height / 1.5,
    top: height / 6,
    justifyContent: 'space-around',
  },
  emailInput: {
    width: width - 36,
    height: 63,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  passwordInput: {
    width: width - 36,
    height: 63,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btnLogin: {
    width: width - 36,
    height: 63,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8E97FD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  txtLogin: { fontSize: 15, letterSpacing: 1, fontWeight: '600' },
});
