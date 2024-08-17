//app.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome'; 
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import DashboardTabNavigator from './screens/DashboardTabNavigator';
import AboutUsScreen from './screens/AboutUsScreen';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'rn_sqlite',
});

const createTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          age INTEGER,
          gender TEXT,
          phone TEXT,
          email TEXT,
          password TEXT
        )`,
        [],
        (_, res) => {
          console.log('Table users created successfully');
          resolve();
        },
        (error) => {
          console.log('Error creating table users ' + error.message);
          reject(error);
        }
      );
    });
  });
};

const Stack = createStackNavigator();

const App = () => {
  const handleLogin = async (email, password, navigation) => {
    try {
      await createTable();

      const result = await new Promise((resolve, reject) => {
        db.transaction((txn) => {
          txn.executeSql(
            'SELECT * FROM users WHERE email = ? AND password = ?',
            [email, password],
            (_, res) => resolve(res),
            (error) => reject(error)
          );
        });
      });

      if (result.rows.length > 0) {
        navigation.replace('Dashboard');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log('Error on checking login ' + error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            opacity: 1,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            alignItems: 'center',
          },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              onLogin={(email, password) =>
                handleLogin(email, password, props.navigation)
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen name="Dashboard" component={DashboardTabNavigator} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
