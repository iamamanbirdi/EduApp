import React, {Component} from 'react';
import MyProfile from '../ProfileScreen';
import ExploreScreen from '../ExploreScreen';
import WeekScreen from '../WeekScreen';
import AlertScreen from '../AlertsScreen';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Button, Text, Footer, FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default createAppContainer(
  (TabBarNavigator = createBottomTabNavigator(
    {
      MyProfile: {screen: MyProfile},
      ExploreScreen: {screen: ExploreScreen},
      WeekScreen: {screen: WeekScreen},
      AlertScreen: {screen: AlertScreen},
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarComponent: props => {
        return (
          <Footer style={{backgroundColor: '#f2f7ff'}}>
            <FooterTab>
              <Button
                vertical
                onPress={() => props.navigation.navigate('MyProfile')}>
                <Icon name="user-o" />
                <Text>Me</Text>
              </Button>
              <Button
                vertical
                onPress={() => props.navigation.navigate('ExploreScreen')}>
                <Icon name="th-large" />
                <Text>Explore</Text>
              </Button>
              <Button
                vertical
                onPress={() => props.navigation.navigate('WeekScreen')}>
                <Icon name="calendar-plus-o" />
                <Text>Week</Text>
              </Button>
              <Button
                vertical
                onPress={() => props.navigation.navigate('AlertScreen')}>
                <Icon name="bell-o" />
                <Text>Alerts</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      },
    },
  )),
);
