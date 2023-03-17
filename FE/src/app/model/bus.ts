import {BusType} from './bus-type';

export interface Bus {
  id?: number;
  busNumber?: number;
  garageName?: string;
  phone?: string;
  email?: string;
  timeGo?: string;
  timeOut?: string;
  startGo?: string;
  endGo?: string;
  busType?: BusType;
}
