import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

export interface Alert{
  type:string;
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private openSnackbar?: MatSnackBarRef<TextOnlySnackBar>
  constructor(private _snackBar: MatSnackBar) { }

  setAlert(alerting: Alert){
    this.openSnackbar = this._snackBar.open(alerting.message, alerting.type);
  }

  close(){
    this.openSnackbar?.dismiss()
  }

}
