import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component,  EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Member, MemberControls } from 'src/app/models/member.model';
import { MembersService } from 'src/app/services/members/members-service.service';

@Component({
  selector: 'app-form-members',
  templateUrl: './form-members.component.html',
  styleUrls: ['./form-members.component.scss']
})
export class FormMembersComponent implements OnInit{
  @Output()savedMember: EventEmitter<Member> = new EventEmitter();
  @Input()chargedSSN: MemberControls.SSN[]=[];

  ssnString= MemberControls.SSN
  nameString= MemberControls.Name
  lastNameString= MemberControls.LastName
  addressString= MemberControls.Address

  validControl = ValidFaces.Valid
  invalidControl = ValidFaces.Invalid

  form: MemberControls[] = [MemberControls.Name,MemberControls.LastName,MemberControls.Address,MemberControls.SSN]
  name = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/^\S\w+\S$/)]);
  lastName = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/^\S\w+\S$/)]);
  address = new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern(/^\S\w+\S$/)]);
  ssn = new FormControl('',[Validators.required,Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]);

  constructor(private membersService: MembersService,private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.ssn.valueChanges.subscribe(value=>{
      if(this.ssn.valid && this.chargedSSN.includes(value)){
        console.log(this.chargedSSN,this.ssn.value)
        this.ssn.setErrors({'notUnique':true})
        this.cdr.detectChanges()
      }
    })
  }
  reset(){
    this.form.forEach(control=>this[control].setValue(null))
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

  onSubmit(){
    const member: Member = {} as Member;
    this.form.forEach(control=>{
      member[control]=this[control].value
    })
    this.chargedSSN.push(member.ssn as MemberControls.SSN)
    this.membersService.pushMember(member).subscribe(res=>this.savedMember.emit(member))
  }
}

enum ValidFaces{
  Valid='sentiment_very_satisfied',
  Invalid='sentiment_very_dissatisfied',
}