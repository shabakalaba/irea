import { createBottomTabNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Login from './Login';
import Register from './Register';

export default TabNav = createBottomTabNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions:() => ({
            title: 'Shop'
        })
    },
    Screen3: {
        screen: Login,
        navigationOptions:() => ({
            title: '',

        })
    },
    Screen4: {
        screen: Register,
        navigationOptions:() => ({
            title: '',

        })
    },
    Screen2: {
        screen: Screen2,
        navigationOptions:() => ({
            title: 'Cart'
            
        })
    },
    
},
    {
        initialRouteName: 'Screen3'
    }
    
);