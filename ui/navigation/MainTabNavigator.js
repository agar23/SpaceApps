import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import EmergencyScreen from '../screens/Emergency';
import DetailsScreen from '../screens/Details';
import ProfileScreen from '../screens/Profile';


const EmergencyStack = createStackNavigator({ Emergency: EmergencyScreen });
const DetailsStack = createStackNavigator({ Details: DetailsScreen });
const ProfileStack = createStackNavigator({ Profile: ProfileScreen });

EmergencyStack.navigationOptions = {
  tabBarLabel: 'Emergency',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-checkmark-circle'}
    />
  ),
};

DetailsStack.navigationOptions = {
  tabBarLabel: 'Camps',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-bonfire'}
    />
  ),
};

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-body'}
    />
  ),
};

export default createBottomTabNavigator({
  EmergencyStack, 
  DetailsStack,
  ProfileStack
});
