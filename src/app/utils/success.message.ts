import { Alert } from "../services/alerts/alerts.service";

export const succesAlert = (message:string):Alert=>{
  return {message,type:'Success'}
}