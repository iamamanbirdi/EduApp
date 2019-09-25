import MyProfile from './MyProfile.js';
import EditScreenOne from './EditScreenOne.js';
import EditScreenTwo from './EditScreenTwo.js';
import {createStackNavigator} from 'react-navigation';
export default StackNav = createStackNavigator({
  MyProfile: {screen: MyProfile},
  EditScreenOne: {screen: EditScreenOne},
  EditScreenTwo: {screen: EditScreenTwo},
});
