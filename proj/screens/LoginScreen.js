import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'rn_sqlite',
});

const LoginScreen = ({ navigation, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Call the onLogin function passed from App.js
    onLogin(email, password);
  };

  // Define styles object
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    },
    contentContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: 20,
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    loginText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 8,
      marginBottom: 20,
      paddingLeft: 15,
      fontSize: 20,
      color: 'black',
    },
    button: {
      backgroundColor: 'black',
      padding: 15,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    linkText: {
      color: 'black',
      fontSize: 18,
      marginTop: 10,
    },
  });

  return (
    <ImageBackground
    source={{
      uri: 'https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.webp?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=',
    }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.loginText}>Login Screen</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
