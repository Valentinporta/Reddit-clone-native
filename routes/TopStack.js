import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Top from '../screens/top/Top'
import PostDetails from '../screens/PostDetails'

/* TAB STACK THAT ALLOWS ME TO GO TO AND FROM THE POST AND ITS DETAIL */

const Stack = createStackNavigator()

const TopStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Top' component={Top} options={{
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

export default TopStack
