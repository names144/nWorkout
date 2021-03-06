import { createStackNavigator } from 'react-navigation';
import { defaultStackConfig } from './config';
import HomeScreen from '../screens/home/HomeScreen';
import { Screen2 } from '../screens/home/Screen2';


export const HomeStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
		}
	},
	{...defaultStackConfig, initialRouteName: 'Home'}
);
