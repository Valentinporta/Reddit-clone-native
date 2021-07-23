import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Navbar from '../components/navbar/Navbar';

/* HOME COMPONENT WHERE I CREATE THE STACK NAVIGATOR TO BE ABLE TO NAVIGATE FROM TAB TO TAB */

const Stack = createStackNavigator()

export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Navbar'>
                <Stack.Screen name='Navbar' component={Navbar} options={{
                    title: 'reddit/r/pics',
                    headerTitleStyle: {
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
