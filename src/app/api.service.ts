import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  visitors: number = 0;

  constructor(private http:HttpClient) { }

  public sendGetRequest<T>(url:string,params:any, headers:HttpHeaders){
    return this.http.get<T>(url, {headers, params})
  }
}
