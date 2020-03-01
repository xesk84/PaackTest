import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {DeliveryDetail} from '../entities';
import {getDelivery} from '../services/api/Delivery';
import {DetailTextRow, DetailCheckRow, Button} from '../components';
import {useSelectedDeliveryContext} from '../providers/SelectedDelivery';
import BackgroundJob from 'react-native-background-job';

interface DeliveryDetailProps {
  navigation;
  route;
}

export function DeliveryDetailScreen(props: DeliveryDetailProps) {
  const {id} = props.route.params;
  const {navigation} = props;
  const [detailDelivery, setDetailDelivery] = useState<DeliveryDetail>({
    id: 0,
    address: '',
    latitutde: 0,
    longitude: 0,
    customerName: '',
    requiresSignature: false,
    specialInstructions: '',
  });

  const [selectedDelivery, setSelectedDelivery] = useSelectedDeliveryContext();

  useEffect(() => {
    if (id > 0) {
      const delivery: DeliveryDetail = getDelivery(id);
      if (!!delivery) {
        setDetailDelivery(delivery);
      }
    }
  });

  const setActive = (): void => {
    const {navigation} = props;
    setSelectedDelivery(detailDelivery.id);

    BackgroundJob.cancelAll()
      .then(() => console.log('Success'))
      .catch(err => console.error(err));


    const backgroundJob = {
      jobKey: 'myJob'+detailDelivery.id,
      job: () => { 
        saveGPSData(); 
       }
     };
    
    BackgroundJob.register(backgroundJob);
    
    var backgroundSchedule = {
     jobKey: 'myJob'+detailDelivery.id,
     period: 1000,
     allowWhileIdle: true,
     exact: true,
     allowExecutionInForeground: true,
    }
    
    BackgroundJob.schedule(backgroundSchedule);
   
   const saveGPSData = () => {
    console.log('Selected Delivery:' + detailDelivery.id);
   }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <DetailTextRow
          fieldName="Id:"
          fieldValue={detailDelivery.id.toString()}
        />
        <DetailTextRow
          fieldName="Customer name:"
          fieldValue={detailDelivery.customerName}
        />
        <DetailTextRow
          fieldName="Address:"
          fieldValue={detailDelivery.address}
        />
        <DetailTextRow
          fieldName="Latitude:"
          fieldValue={detailDelivery.latitutde.toString()}
        />
        <DetailTextRow
          fieldName="Longitude:"
          fieldValue={detailDelivery.longitude.toString()}
        />
        <DetailCheckRow
          fieldName="Requires signature:"
          fieldValue={detailDelivery.requiresSignature}
        />
        <DetailTextRow
          fieldName="Special instructions:"
          fieldValue={detailDelivery.specialInstructions}
        />
      </View>
      {detailDelivery.id === selectedDelivery ? (
        <View style={styles.buttonContainer}>
          <Text style={styles.currentActiveText}>Current Active</Text>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button onPress={setActive} />
        </View>
      )}
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
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 20,
  },
  buttonContainer: {
    paddingTop: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  currentActiveText: {
    fontSize: 25,
    color: 'black'
  }
});
