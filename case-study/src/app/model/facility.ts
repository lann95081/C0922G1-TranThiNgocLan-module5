import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  facilityFree?: string;
  maxPeople?: number;
  numberFloors?: number;
  otherConvenience?: string;
  poolArea?: number;
  standardRoom?: string;
  facilityType?: FacilityType;
  rentType?: RentType;
}
