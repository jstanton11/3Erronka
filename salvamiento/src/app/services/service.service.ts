import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Erreskateak } from '../models/erreskateak';
import { Erreskatatuak } from '../models/erreskatatuak';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private urlErreskateak='http://localhost:3004/erreskateak';
baseURLErreskateak: string = 'http://localhost:3004/erreskateak';

private urlErreskatatuak='http://localhost:3004/erreskatatuak';
baseURLErreskatatuak: string = 'http://localhost:3004/erreskatatuak';
datos:any[];
erreskatea: Erreskateak = {id: 0, lekua: '', data: '', erreskatatutako_pertsonak: 0, oharrak: '', argazkia: ''  };

erreskatatua: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};

constructor(private http: HttpClient) {
  this.datos = [];
}
//ERRESKATEAK
public getErreskateak(): Observable<any> {
  return this.http.get(this.urlErreskateak);
}

  altaErreskateak(erreskatea:Erreskateak):Observable<Erreskateak>{
    return this.http.post<Erreskateak>(this.baseURLErreskateak,erreskatea,httpOptions);
  }
  bajaErreskateak(erreskatea:Erreskateak):Observable<Erreskateak>{
    let urlDeleteErreskateak = '${this.urlErreskateak}/${erreskatea.id}';
    return this.http.delete<Erreskateak>(urlDeleteErreskateak);
  }
  
//ERRESKATUAK
public getErreskatatuak(): Observable<any> {
  return this.http.get(this.urlErreskatatuak);
  }
  altaErreskatatuak(erreskatatua:Erreskatatuak):Observable<Erreskatatuak>{
    return this.http.post<Erreskatatuak>(this.baseURLErreskatatuak,erreskatatua,httpOptions);
  }
  bajaErreskatatuak(erreskatatua:Erreskatatuak):Observable<Erreskatatuak>{
    let urlDeleteErreskatatuak = '${this.urlErreskatatuak}/${erreskatatua.id}';
    return this.http.delete<Erreskatatuak>(urlDeleteErreskatatuak);
  }
}
