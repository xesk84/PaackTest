import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DeliveriesList, DeliveryDetailScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import BackgroundJob from 'react-native-background-job';
import { useSelectedDeliveryContext } from './providers/SelectedDelivery';


export function RootNavigation () {
    const [selectedDelivery, setSelectedDelivery] = useSelectedDeliveryContext();

    const backgroundJob = {
        jobKey: 'myJob',
        job: (selectedDelivery) => { 
          saveGPSData(selectedDelivery); 
         }
       };
      
      BackgroundJob.register(backgroundJob);
      
      var backgroundSchedule = {
       jobKey: 'myJob',
       period: 1000,
       allowWhileIdle: true,
       exact: true,
       allowExecutionInForeground: true,
      }
      
      BackgroundJob.schedule(backgroundSchedule);
     
      BackgroundJob.isAppIgnoringBatteryOptimization((error,ignoringOptimization) => { 
        console.log(error+' <<Android>>ignore>> '+ignoringOptimization) 
       });
     
     const saveGPSData = (selectedDelivery) => {
      console.log('Selected Delivery:' + selectedDelivery);
     }

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
