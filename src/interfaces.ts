import { EPageName } from './enums';

export interface IPageKeys {
  ['What?']: string;
  ['How?']: string | string[];
  ['More Information']: string | string[];
}

export interface IDataBackend {
  data?: IData;
}

export interface IData {
  [EPageName.REUSE]: IPageKeys
  [EPageName.REDUCE]: IPageKeys
  [EPageName.RECYCLE]: IPageKeys
}