import { createBottomTabNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default TabNav = createBottomTabNavigator({
    
    Screen1: {
        screen: Screen1,
        navigationOptions:() => ({
            title: 'Store'
        })
    },
    Screen2: {
        screen: Screen2,
        navigationOptions:() => ({
            title: 'Cart'
        })
    }
});