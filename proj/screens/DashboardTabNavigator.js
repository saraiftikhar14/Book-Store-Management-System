import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutUsScreen from './AboutUsScreen';
import HomeScreen from './HomeScreen';
import DashboardScreen from './DashboardScreen';
import BookComponent from './BookComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const DashboardTabNavigator = ({ navigation }) => {
  const handleLogout = () => {
    navigation.popToTop();
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'DashboardScreen')
           {
            iconName = focused ? 'dashboard' : 'dashboard-outline';
          } 
          else if (route.name === 'About') 
          {
            iconName = focused ? 'information' : 'information-outline';
          } 
          else if (route.name === 'BookComponent') 
          {
            iconName = focused ? 'book' : 'book-outline';
          } 
          else if (route.name === 'Logout') 
          {
            iconName = focused ? 'logout' : 'logout-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="About" component={AboutUsScreen} />
      <Tab.Screen name="BookComponent" component={BookComponent} />
      <Tab.Screen
        name="Logout"
        component={HomeScreen}
        listeners={{ tabPress: handleLogout }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;
