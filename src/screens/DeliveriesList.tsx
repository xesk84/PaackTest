import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ListRenderItemInfo } from 'react-native';
import { getDeliveries } from '../services';
import { Delivery } from '../entities';



export function DeliveriesList () {

  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    const auxDeliveries = getDeliveries();
    if (!!auxDeliveries && auxDeliveries.length > 0){
      console.log('tinc deliveries', auxDeliveries)
      setDeliveries(auxDeliveries);
    }
  });

  const keyExtractor = (item, index: number) => {
    return index.toString();
  }

  const renderItem = (listItem: ListRenderItemInfo<Delivery>): JSX.Element => {
    const {item} = listItem;
    console.log('item', listItem);
  return (<View><Text>{item.customerName}</Text></View>);
  };

    return (
      <SafeAreaView>
         <FlatList 
          data={deliveries}
          keyExtractor={keyExtractor}
          renderItem={renderItem}/>
      </SafeAreaView>
    );
}
