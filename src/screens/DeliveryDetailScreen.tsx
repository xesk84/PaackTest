import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { DeliveryDetail } from '../entities';
import { getDelivery } from '../services/api/Delivery';
import { DetailTextRow, DetailCheckRow } from '../components';

interface DeliveryDetailProps {
  navigation,
  route
}

export function DeliveryDetailScreen (props: DeliveryDetailProps) {
  const {id} = props.route.params;
  const [detailDelivery, setDetailDelivery] = useState<DeliveryDetail>({
    id: 0,
    address: '',
    latitutde: 0,
    longitude:0,
    customerName: '',
    requiresSignature: false,
    specialInstructions: ''
  })

  useEffect(() => {
    if(id > 0){
      const delivery: DeliveryDetail = getDelivery(id);
      if(!!delivery){
        setDetailDelivery(delivery);
      } 
    }
  })

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.dataContainer}>
           <DetailTextRow fieldName='Id:' fieldValue={detailDelivery.id.toString()} />
           <DetailTextRow fieldName='Customer name:' fieldValue={detailDelivery.customerName} />
           <DetailTextRow fieldName='Address:' fieldValue={detailDelivery.address} />
           <DetailTextRow fieldName='Latitude:' fieldValue={detailDelivery.latitutde.toString()} />
           <DetailTextRow fieldName='Longitude:' fieldValue={detailDelivery.longitude.toString()} />
           <DetailCheckRow fieldName='Requires signature:' fieldValue={detailDelivery.requiresSignature} />
           <DetailTextRow fieldName='Special instructions:' fieldValue={detailDelivery.specialInstructions} />
        </View>
        <View>
          
        </View>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  dataContainer: {
    borderWidth:0.5,
    borderColor: 'black',
    padding: 20

  }
})
