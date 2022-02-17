import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {

  isLoading: boolean = false;

  constructor() { }

}
