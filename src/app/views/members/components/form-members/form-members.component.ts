import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component,  EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Member, MemberControls } from 'src/app/models/member.model';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { MembersService } from 'src/app/services/members/members-service.service';
import { ssnMask } from 'src/app/utils/masks';
import { succesAlert } from 'src/app/utils/success.message';
import { errorAlert } from '../../../../utils/error-message';

@Component({
  selector: 'app-form-members',
  templateUrl: './form-members.component.html',
  styleUrls: ['./form-members.component.scss']
})
export class FormMembersComponent implements OnInit, OnDestroy{
  @Output()savedMember: EventEmitter<Member> = new EventEmitter();
  @Input()chargedSSN: MemberControls.SSN[]=[];
  subscriptions: Subscription = new Subscription();

  ssnString= MemberControls.SSN
  nameString= MemberControls.FirstName
  lastNameString= MemberControls.LastName
  addressString= MemberControls.Address

  validControl = ValidFaces.Valid
  invalidControl = ValidFaces.Invalid

  form: MemberControls[] = [MemberControls.FirstName,MemberControls.LastName,MemberControls.Address,MemberControls.SSN]
  firstName = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/[^\s]+(\s+[^\s]+)*$/)]);
  lastName = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/[^\s]+(\s+[^\s]+)*$/)]);
  address = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/[^\s]+(\s+[^\s]+)*$/)]);
  ssn = new FormControl('',[Validators.required,Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]);

  constructor(private membersService: MembersService,private cdr: ChangeDetectorRef, private alertsService: AlertsService) { }

  ngOnInit(){
    this.subscriptions.add(this.ssn.valueChanges.subscribe(value=>{
      if(this.ssn.valid && this.chargedSSN.includes(value)){
        this.ssn.setErrors({'notUnique':true})
        this.cdr.detectChanges()
      }
    }))
  }
  reset(){
    this.form.forEach(control=>this[control].reset())
  }

  isValid(){
    return !this.form.every(control=>!this[control].errors)
  }

  getErrorMessage(name: MemberControls) {
    const control = this[name];
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return control.hasError('pattern') ? 'Not a valid pattern' : '';
  }

  ssnMask = ssnMask

  onSubmit(){
    const member: Member = {} as Member;
    this.form.forEach(control=>{
      member[control]=this[control].value
    })
    this.chargedSSN.push(member.ssn as MemberControls.SSN)
    this.membersService.pushMember(member).subscribe(
      res=>{this.savedMember.emit(member);this.reset();this.alertsService.setAlert(succesAlert('New member charged successfully'))},
      err=>this.alertsService.setAlert(errorAlert('Error while trying to save the new member'))
    )
  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }
}

enum ValidFaces{
  Valid='sentiment_very_satisfied',
  Invalid='sentiment_very_dissatisfied',
}