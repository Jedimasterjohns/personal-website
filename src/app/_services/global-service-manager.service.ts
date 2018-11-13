import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalServiceManager {
  private _showScrollPrompter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showScrollPrompter: Observable<boolean> = this._showScrollPrompter.asObservable();

  constructor() { }

  public activateScrollPrompter() {
    return this._showScrollPrompter.next(true);
  }
}
