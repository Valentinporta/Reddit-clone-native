import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hot from '../screens/hot/Hot'
import PostDetails from '../screens/PostDetails'

/* TAB STACK THAT ALLOWS ME TO GO TO AND FROM THE POST AND ITS DETAIL */

const Stack = createStackNavigator()

const HotStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Hot' component={Hot} options={{
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

export default HotStack
