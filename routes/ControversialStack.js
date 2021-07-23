import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Controversial from '../screens/controversial/Controversial'
import PostDetails from '../screens/PostDetails'

/* TAB STACK THAT ALLOWS ME TO GO TO AND FROM THE POST AND ITS DETAIL */

const Stack = createStackNavigator()

const ControversialStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Controversial' component={Controversial} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                }
            }}/>
            <Stack.Screen name='PostDetails' component={PostDetails} />
        </Stack.Navigator>
    )
}

export default ControversialStack