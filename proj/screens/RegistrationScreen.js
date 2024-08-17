import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'rn_sqlite',
});

const RegistrationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Perform input validation
    if (!name || !age || !gender || !phone || !email || !password) {
      Alert.alert('All fields are required');
      return;
    }

    // Assuming simple email validation for demonstration
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid email address');
      return;
    }

    // Assuming password should be at least 6 characters long for demonstration
    if (password.length < 6) {
      Alert.alert('Password should be at least 6 characters long');
      return;
    }

    // If all validations pass, proceed with registration
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO users (name, age, gender, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)',
        [name, age, gender, phone, email, password],
        (sqlTxn, res) => {
          console.log(`${name} registered successfully`);
          // Now, navigate to Dashboard after registration
          Alert.alert('Registration Successful', 'You can now log in!');
          navigation.navigate('Login');
        },
        error => {
          console.log('error on registration ' + error.message);
        },
      );
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
    },
    contentContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 120,
      width: '100%',
      
      alignItems: 'center',
    },
    registrationText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    input: {
      width: 250,
      height: 50,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 8,
      marginBottom: 20,
      paddingLeft: 15,
      fontSize: 18,
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
      fontSize: 20,
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
          <Text style={styles.registrationText}>Registration </Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={text => setAge(text)}
          />
          <TextInput
            placeholder="Gender"
            style={styles.input}
            value={gender}
            onChangeText={text => setGender(text)}
          />
          <TextInput
            placeholder="Phone"
            style={styles.input}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text></Text>
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text></Text>
        
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
