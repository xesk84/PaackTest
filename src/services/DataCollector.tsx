import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';
import {Tracking} from '../entities';
import {postTrackings} from './api/TrackData';

let tracking: Tracking = {driverId: 0, trackingDatas: []};

export const collectData = (deliveryId: number, driverId: number) => {
  getCurrentPosition(deliveryId, driverId);
};

const getCurrentPosition = (deliveryId: number, driverId: number): void => {
  Geolocation.getCurrentPosition(geoLocation => {
    getBatteryLevel(deliveryId, driverId, geoLocation);
  });
};

const getBatteryLevel = async (
  deliveryId: number,
  driverId: number,
  geoLocation: GeolocationResponse,
) => {
  await DeviceInfo.getBatteryLevel().then(battery => {
    buildTrackingData(deliveryId, driverId, geoLocation, battery);
  });
};

const buildTrackingData = (
  deliveryId: number,
  driverId: number,
  geoLocation: GeolocationResponse,
  battery: number,
) => {
  tracking.driverId = driverId;
  tracking.trackingDatas.push({
    deliveryId: deliveryId,
    latitude: geoLocation.coords.latitude,
    longitude: geoLocation.coords.longitude,
    batteryLevel: battery * 100,
    timestamp: Date.now(),
  });
  
  if (tracking.trackingDatas.length >= 10) {
    postTrackings(tracking);
    tracking.trackingDatas = [];
  }
};
