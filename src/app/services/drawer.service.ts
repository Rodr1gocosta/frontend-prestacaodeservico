import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private drawerState = false;

  setDrawerState(state: boolean): void {
    this.drawerState = state;
  }

  getDrawerState(): boolean {
    return this.drawerState;
  }
}
