import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import New from '../screens/new/New'
import PostDetails from '../screens/PostDetails'

/* TAB STACK THAT ALLOWS ME TO GO TO AND FROM THE POST AND ITS DETAIL */

const Stack = createStackNavigator()

const NewStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='asd' component={New} options={{
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

export default NewStack
