import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps155069Navigator from '../features/Maps155069/navigator';
import Add-Item155068Navigator from '../features/Add-Item155068/navigator';
import Maps155064Navigator from '../features/Maps155064/navigator';
import UserProfile155060Navigator from '../features/UserProfile155060/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps155069: { screen: Maps155069Navigator },
Add-Item155068: { screen: Add-Item155068Navigator },
Maps155064: { screen: Maps155064Navigator },
UserProfile155060: { screen: UserProfile155060Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
