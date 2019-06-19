import { Injectable } from '@angular/core';

export interface ShareObj {
  [id: string]: any;
}

@Injectable()
export class GlobalService {

  shareObj: ShareObj = {};

  constructor() { }

}