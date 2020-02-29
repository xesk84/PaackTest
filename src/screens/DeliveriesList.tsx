import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { getDeliveries } from '../services';
import { Delivery } from '../entities';
import { ListItem } from '../components';

//TODO: tipar navigation
export function DeliveriesList ({navigation}) {
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    const auxDeliveries = getDeliveries();
    if (!!auxDeliveries && auxDeliveries.length > 0){
      setDeliveries(auxDeliveries);
    }
  });

  const keyExtractor = (item, index: number) => {
    return index.toString();
  }

  const renderItem = (listItem: ListRenderItemInfo<Delivery>): JSX.Element => {
    const {item} = listItem;
  return (<ListItem item={item} navigation={navigation} />);
  };

    return (
      <SafeAreaView style={styles.container}>
         <FlatList 
          data={deliveries}
          keyExtractor={keyExtractor}
          renderItem={renderItem}/>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container:{
    padding: 20,
    backgroundColor: 'white',
    flex: 1
  }
})