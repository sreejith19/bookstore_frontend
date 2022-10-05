import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="https://localhost:44377/api/";
  constructor(private http:HttpClient) { }
  login(data:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/login/user`,data);
    }
    checkToken():boolean{
      if(localStorage.getItem('token'))
      return true;
      else return false;
    }
    logout(){
      localStorage.clear();
    }
    register(input:any):Observable<any>{
      var data={
      "username":input.userName,
      "email":input.email,
      "phone":input.phone,
      "address":input.address,
      "joinedAt":"2022-09-28T17:05:37"
    };
    
    var resp=this.http.post(`${this.baseUrl}/user/add`,data);
    return resp;
    }
    addCredentials():Observable<any>{
      
    var cred={
      "userName":"fdsertegs",
      "password":"erwe"
    };
    console.log(cred);
    
    var resp=this.http.post(`${this.baseUrl}/login/add`,cred);
    console.log(resp);
    return resp;
    }

}
