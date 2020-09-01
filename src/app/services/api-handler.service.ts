import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ApiHandlerService {

  API_ENDPOINT_URL: string;

  API_ENDPOINT = environment.api_endpoint;

  headers: HttpHeaders;


  constructor(private httpClient: HttpClient) { }

  API_HOSTNAME(): string {
    if (this.API_ENDPOINT_URL == null) {
      this.API_ENDPOINT_URL = window.location.hostname;
    }
    return this.API_ENDPOINT_URL;
  }


  protected createRequestOptions(queryString?: any) {
    return {
      headers: this.createRequestHeaders(),
      params: this.createRequestParams(queryString)
    };
  }

  protected createRequestHeaders(): HttpHeaders {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = this.headers.set('zoneOffset', new Date().getTimezoneOffset().toString());
    return this.headers;
  }

  protected createRequestParams(urlParams?: any): HttpParams {
    let urlSearchParams = new HttpParams();

    if (urlParams) {
      for (const key in urlParams) {
        if (urlParams[key] != null && urlParams[key] !== '') {
          if (urlParams[key] instanceof Array) {
            for (let i = 0; i < urlParams[key].length; i++) {
              urlSearchParams = urlSearchParams.append(key, urlParams[key][i]);
            }
          } else {
            urlSearchParams = urlSearchParams.set(key, urlParams[key]);
          }
        }
      }
    }

    return urlSearchParams;
  }


  protected resolve(path: string): string {
    return this.API_HOSTNAME() + this.API_ENDPOINT + path;
  }


  public get(url: string, queryString?: any): Observable<any> {
    const options = this.createRequestOptions(queryString);
    return this.httpClient.get(this.resolve(url), options);
}

  public post(url: string, queryString?: any, data?: any): Observable<any> {
    const options = this.createRequestOptions(queryString);
    return this.httpClient.post(this.resolve(url), data, options);
  }

  public put(url: string, queryString?: any, data?: any): Observable<any> {
    const options = this.createRequestOptions(queryString);
    return this.httpClient.put(this.resolve(url), data, options);
}

public delete(url: string, queryString?: any): Observable<any> {
    const options = this.createRequestOptions(queryString);
    return this.httpClient.delete(this.resolve(url), options);
}

public patch(url: string, queryString?: any, data?: any): Observable<any> {
  const options = this.createRequestOptions(queryString);
  return this.httpClient.patch(this.resolve(url), data, options);
}



}
