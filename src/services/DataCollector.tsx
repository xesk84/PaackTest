import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';
import { Tracking } from '../entities';
import { PowerState } from 'react-native-device-info/lib/typescript/internal/types';
import {postTrackings} from './api/TrackData';

let tracking: Tracking = {driverId: 0, trackingDatas: []};

export const collectData = (deliveryId: number, driverId: number) => {
    getCurrentPosition(deliveryId, driverId);
};

const getCurrentPosition = (deliveryId: number, driverId: number): void => {
    Geolocation.getCurrentPosition(geoLocation => {
        buildTracking(deliveryId, driverId, geoLocation);
     });
};

const buildTracking = async (deliveryId: number, driverId: number, geoLocation: GeolocationResponse) => {

    let batteryLevel = 0;
    await DeviceInfo.getPowerState().then(battery => batteryLevel = battery.batteryLevel);

    tracking.driverId = driverId;
    tracking.trackingDatas.push({
        deliveryId: deliveryId,
        latitude: geoLocation.coords.latitude,
        longitude: geoLocation.coords.longitude,
        batteryLevel: batteryLevel * 100,
        timestamp: geoLocation.timestamp
    });
    if(tracking.trackingDatas.length >= 10){
        postTrackings(tracking);
        tracking.trackingDatas = [];
    }
};


