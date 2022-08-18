import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../Todo/Todo';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="toDo" component={Todo} options={{ headerShown: false }} />
                <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="logIn" component={LogIn} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation