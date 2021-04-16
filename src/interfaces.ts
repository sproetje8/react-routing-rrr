import { EPageName } from './enums';

export interface IPageKeys {
  [EPageName: string]: string | string[];
}

export interface IDataBackend {
  data?: IData;
}

export interface IData {
  [EPageName.REUSE]: IPageKeys
  [EPageName.REDUCE]: IPageKeys
  [EPageName.RECYCLE]: IPageKeys
}