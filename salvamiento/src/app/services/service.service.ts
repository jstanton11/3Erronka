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
  private baseURL = 'http://localhost:3004'; // URL base
  private erreskateakURL = `${this.baseURL}/erreskateak`;
  private erreskatatuakURL = `${this.baseURL}/erreskatatuak`;

  constructor(private http: HttpClient) {}

  // ERRESKATEAK
  public getErreskateak(): Observable<Erreskateak[]> {
    return this.http.get<Erreskateak[]>(this.erreskateakURL);
  }

  altaErreskateak(erreskatea: Erreskateak): Observable<Erreskateak> {
    return this.http.post<Erreskateak>(this.erreskateakURL, erreskatea, httpOptions);
  }

  bajaErreskateak(erreskatea: Erreskateak): Observable<void> {
    const url = `${this.erreskateakURL}/${erreskatea.id}`;
    return this.http.delete<void>(url);
  }

  eguneratuErreskateak(erreskatea: Erreskateak): Observable<Erreskateak> {
    const url = `${this.erreskateakURL}/${erreskatea.id}`;
    return this.http.put<Erreskateak>(url, erreskatea, httpOptions);
  }

  // ERRESKATUAK
  public getErreskatatuak(): Observable<Erreskatatuak[]> {
    return this.http.get<Erreskatatuak[]>(this.erreskatatuakURL);
  }

  altaErreskatatuak(erreskatatua: Erreskatatuak): Observable<Erreskatatuak> {
    return this.http.post<Erreskatatuak>(this.erreskatatuakURL, erreskatatua, httpOptions);
  }

  bajaErreskatatuak(erreskatatua: Erreskatatuak): Observable<void> {
    const url = `${this.erreskatatuakURL}/${erreskatatua.id}`;
    return this.http.delete<void>(url);
  }

  eguneratuErreskatatuak(erreskatatua: Erreskatatuak): Observable<Erreskatatuak> {
    const url = `${this.erreskatatuakURL}/${erreskatatua.id}`;
    return this.http.put<Erreskatatuak>(url, erreskatatua, httpOptions);
  }
}
// export class ServiceService {
// private urlErreskateak='http://localhost:3004/erreskateak';
// baseURLErreskateak: string = 'http://localhost:3004/erreskateak';

// private urlErreskatatuak='http://localhost:3004/erreskatatuak';
// baseURLErreskatatuak: string = 'http://localhost:3004/erreskatatuak';
// datos:any[];
// erreskatea: Erreskateak = {id: 0, lekua: '', data: '', erreskatatutako_pertsonak: 0, oharrak: '', argazkia: ''  };

// erreskatatua: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};

// constructor(private http: HttpClient) {
//   this.datos = [];
// }

// public erreskatatuGuztiak(){
//   return new Promise(
//     resolve => {
//       this.http.get('http://localhost:3004/erreskatatuak').subscribe(
//         data => resolve(data)
//       );
//     }
//   )
// }

// //ERRESKATEAK
// public getErreskateak(): Observable<any> {
//   return this.http.get(this.urlErreskateak);
// }

//   altaErreskateak(erreskatea:Erreskateak):Observable<Erreskateak>{
//     return this.http.post<Erreskateak>(this.baseURLErreskateak,erreskatea,httpOptions);
//   }
//   bajaErreskateak(erreskatea:Erreskateak):Observable<Erreskateak>{
//     let urlDeleteErreskateak = '${this.urlErreskateak}/${erreskatea.id}';
//     return this.http.delete<Erreskateak>(urlDeleteErreskateak);
//   }
//   eguneratuErreskateak(erreskatea:Erreskateak):Observable<Erreskateak>{
//     const urlUpdateErreskateak = '${this.urlErreskateak}/${erreskatea.id}';
//     return this.http.put<Erreskateak>(urlUpdateErreskateak, erreskatea, httpOptions);
//   }

// //ERRESKATUAK
// public getErreskatatuak(): Observable<any> {
//   return this.http.get(this.urlErreskatatuak);
//   }
//   altaErreskatatuak(erreskatatua:Erreskatatuak):Observable<Erreskatatuak>{
//     return this.http.post<Erreskatatuak>(this.baseURLErreskatatuak,erreskatatua,httpOptions);
//   }
//   bajaErreskatatuak(erreskatatua:Erreskatatuak):Observable<Erreskatatuak>{
//     let urlDeleteErreskatatuak = '${this.urlErreskatatuak}/${erreskatatua.id}';
//     return this.http.delete<Erreskatatuak>(urlDeleteErreskatatuak);
//   }
//   eguneratuErreskatatuak(erreskatatua:Erreskatatuak):Observable<Erreskatatuak>{
//     const urlUpdateErreskatatuak = '${this.urlErreskatatuak}/${erreskatatua.id}';
//     return this.http.put<Erreskatatuak>(urlUpdateErreskatatuak, erreskatatua, httpOptions);
//   }
// }}
