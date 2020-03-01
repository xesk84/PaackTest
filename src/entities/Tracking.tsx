import { Driver } from "./Driver";
import { TrackingData } from "./TrackingData";

export interface Tracking {
    driverId: number,
    trackingDatas : Array<TrackingData>
}