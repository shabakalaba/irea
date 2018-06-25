import { createStackNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default TabNav = createStackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions:() => ({
            title: 'IREA'
        })
    },
    Screen2: {
        screen: Screen2,
        navigationOptions:() => ({
            title: 'YOUR BASKET'
        })
    }
});