import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DeliveriesList, DeliveryDetailScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';


export function RootNavigation () {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name='List' component={DeliveriesList} />
            <Stack.Screen name='Detail' component={DeliveryDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
