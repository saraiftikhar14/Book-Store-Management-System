import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://media.istockphoto.com/id/1386193712/photo/knowledge.jpg?s=612x612&w=0&k=20&c=UA_Z9Y_4dDQvh3l5j21JIkyV_SSedaXrmY1HuGyWOIA=',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.clipartmax.com/png/middle/220-2204775_access-login-png-logo-de-login.png',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    width: '80%', // Adjusted width to match the original container
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
