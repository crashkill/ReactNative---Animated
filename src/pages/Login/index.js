import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Logo from '../../assets/logo-hitss.png';

export default function HitssMobile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    console.log(email, password);
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.background}
      enabled={Platform.OS === 'ios'}>
      <View style={styles.containerLogo}>
        <Animatable.Image animation="zoomIn" duration={1000} source={Logo} />
      </View>
      <View style={[styles.container]}>
        <Animatable.View
          style={styles.input}
          animation="fadeInRight"
          duration={1000}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#444"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </Animatable.View>

        <Animatable.View
          style={styles.input}
          animation="fadeInLeft"
          duration={1000}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#444"
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
        </Animatable.View>

        <Animatable.View
          style={styles.btnSubmit}
          animation="tada"
          duration={1000}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View
          style={styles.btnRegister}
          animation="fadeInUp"
          duration={1000}>
          <TouchableOpacity>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
    padding: 20,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
