export enum MemberControls{
  FirstName='firstName',
  Address='address',
  LastName='lastName',
  SSN='ssn',
}
export interface Member{
  [MemberControls.FirstName]: string;
  [MemberControls.LastName]: string;
  [MemberControls.Address]: string;
  [MemberControls.SSN]: string;
}
