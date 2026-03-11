import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'   // 🔥 VERY IMPORTANT
})
export class Mbcservices {
  url = "https://homeapp-mu.vercel.app/api" ;
  header_post: HttpHeaders = new HttpHeaders();

  constructor(private _http: HttpClient) {
    // console.log('url:::::::', this.url);
  }

  getData() {
    const options = {
      headers: this.header_post,
    };
    return this._http.get(this.url + '/contact/all', options).pipe(
      map((res: any) => {
        if (res && res.statuscode === 200) {
          return res.data;
        } else {
          return [];
        }
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      }),
    );
  }
  getsubscribe(){
     const options = {
      headers: this.header_post,
    };
    return this._http.get(this.url + '/subscribe', options).pipe(
      map((res: any) => {
        if (res && res.statuscode === 200) {
          return res.data;
        } else {
          return [{
            id:1,
            email:"sai@gmail.com"
          }];
        }
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      }),
    );

  }
}
