import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  url = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  
  getJobs(){
    return this.http.get(`${this.url}/showjobs`);
  }

  searchJobs(query){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(query);
    return this.http.post(this.url + '/search', body,{'headers':headers})
  }

  getJobDetails(query){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(query);
    return this.http.post(this.url + '/details', body,{'headers':headers})
  }

}
