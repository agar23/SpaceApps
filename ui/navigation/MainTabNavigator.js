import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import EmergencyScreen from '../screens/Emergency';
import DetailsScreen from '../screens/Details';


const EmergencyStack = createStackNavigator({
  Emergency: EmergencyScreen,
});

EmergencyStack.navigationOptions = {
  tabBarLabel: 'Emergency',
  tabBarIcon: ({ focused }) => {
    return <Icon name='warning'  />
  }
};

const DetailsStack = createStackNavigator({
  Details: DetailsScreen,
});

DetailsStack.navigationOptions = {
  tabBarLabel: 'Camps',
  tabBarIcon: ({ focused }) => {
    return <Icon name='list'  />
  },
};

export default createBottomTabNavigator({
  EmergencyStack, 
  DetailsStack
});
