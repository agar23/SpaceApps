import React from 'react';
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
      name={'md-warning'}
    />
  )
};

DetailsStack.navigationOptions = {
  tabBarLabel: 'Camps',
   
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-list'}
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
