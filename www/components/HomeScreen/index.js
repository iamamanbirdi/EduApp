import React, {Component} from 'react';
import HomeScreen from './HomeScreen.js';
import SideBar from '../SideBar/SideBar.js';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);
export default createAppContainer(HomeScreenRouter);
