export interface LoginResponse{
  exp:number;
  iat:number;
  token:string;
}

export interface ApiResponse<T>{
  data: T;
}