import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DeliveriesList, DeliveryDetail, DeliveryDetailScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
// import { useUserContext } from './providers/UserProvider';
// import { User } from './entities/User';
// import { GetGlobalUser } from './services/AsyncStorageService';

export function RootNavigation () {
    const Stack = createStackNavigator();
    
    
    // const [loading, setLoading] = useState(true);
    // const [logged, setLogged] = useState(false);
    // const [user, setUser] = useUserContext();
    
    // useEffect(() => {
    //     LoadGlobalData();
    // });
    
    // const LoadGlobalData = async () => {
    //     setLoading(true);
    //     if(!user || user.id === 0){
    //         let asyncStorageUser: User = await GetGlobalUser();
    //         if(!!asyncStorageUser && asyncStorageUser.id > 0){
    //             setUser(asyncStorageUser);
    //             setLogged(true);
    //         }
    //     }
    //     setLoading(false);
    //   };


    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={DeliveriesList} />
            <Stack.Screen name="Detail" component={DeliveryDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
