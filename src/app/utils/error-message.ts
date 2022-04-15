import { Alert } from '../services/alerts/alerts.service';

export const errorAlert = (message: string):Alert=>{
  return {message, type: 'error'}
}