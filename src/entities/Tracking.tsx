import { Driver } from "./Driver";
import { TrackingData } from "./TrackingData";

export interface Tracking {
    driver: Driver,
    trackingDatas : Array<TrackingData>
}