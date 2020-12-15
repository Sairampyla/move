import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Isample} from '../services/sample';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SampleService {
  private url:string = "http://localhost:1000";
 // private _url:string = "http://npapiadm.azaz.com/api/"

  formdata:Isample;

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization':'kfjewjj55454t9hk'
  //   })
  // }
  
  constructor(private http:HttpClient) { }
  // getData():Observable<Isample[]>{
  //   return this.http.get<Isample[]>(this._url+'/dealerdepartments')
  //  }

  getData():Observable<Isample[]>{
   const Headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'kfjewjj55454t9hk'
    });
    
   return this.http.get<Isample[]>(this.url+'/data',{headers:Headers})
  }

  createData(formdata :Isample): Observable<Isample> {
    return this.http.post<Isample>(this.url +'/data', JSON.stringify(formdata));
  }


  getSingleData(id): Observable<Isample> {
    return this.http.get<Isample>( this.url+'/data/'+id);
  }
   

  updateData(vendor): Observable<Isample> {
    return this.http.put<Isample>(this.url+'/data/' +vendor.id,
    JSON.stringify(vendor));
  }

    
  deleteData(id) {
    return this.http.delete<Isample>(this.url +'/data/' + id);
  }

  getToken(){
    return localStorage.getItem('token')
  }


}
