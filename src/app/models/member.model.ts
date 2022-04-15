export enum MemberControls{
  Name='name',
  Address='address',
  LastName='lastName',
  SSN='ssn',
}
export interface Member{
  [MemberControls.Name]: string;
  [MemberControls.LastName]: string;
  [MemberControls.Address]: string;
  [MemberControls.SSN]: string;
}
