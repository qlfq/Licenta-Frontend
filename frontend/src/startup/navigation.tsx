import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../home'
import { Login } from '../login'
import { Register } from '../register'
import { Rooms } from '../rooms'
import { Room } from '../room'
import { DirectMessages } from '../direct-messages'
import { Profile } from '../profile'

const Stack = createNativeStackNavigator()

export const Navigation = () => <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name={'Home'}
      component={Home}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={'Login'}
      component={Login}
      options={{
        headerTitle: () => <></>
      }}
    />
    <Stack.Screen
      name={'Register'}
      component={Register}
      options={{
        headerTitle: () => <></>
      }}
    />
    <Stack.Screen
      name={'Rooms'}
      component={Rooms}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={'Room'}
      component={Room}
      options={{
        headerTitle: () => <></>
      }}
    />
    <Stack.Screen
      name={'DM'}
      component={DirectMessages}
      options={{
        headerTitle: () => <></>
      }}
      />
    <Stack.Screen
      name={'Profile'}
      component={Profile}
      options={{
        headerTitle: () => <></>
      }}
      />
  </Stack.Navigator>
</NavigationContainer>
