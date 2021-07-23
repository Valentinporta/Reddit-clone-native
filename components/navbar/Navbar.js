import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HotStack from '../../routes/HotStack'
import ControversialStack from '../../routes/ControversialStack'
import TopStack from '../../routes/TopStack'
import NewStack from '../../routes/NewStack'

/*
    HERE I RENDER A NAV BAR AT THE TOP USING MATERIAL TOP TABS THAT CONTAINS EVERY SCREEN
    THAT I CAN NAVIGATE TO
*/

const Navbar = () => {

    const Stack = createMaterialTopTabNavigator()
    const tabBarOptions = {
        activeTintColor: 'white',
        inactiveTintColor: '#00CCFF',
        indicatorStyle: { backgroundColor: '#00CCFF', height: '100%' },
        pressOpacity: 1,
      }

    return (
        <Stack.Navigator tabBarOptions={tabBarOptions}>
            <Stack.Screen name='New' component={NewStack}></Stack.Screen>
            <Stack.Screen name='Top' component={TopStack}></Stack.Screen>
            <Stack.Screen name='Controversial' component={ControversialStack}></Stack.Screen>
            <Stack.Screen name='Hot' component={HotStack}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navbar
