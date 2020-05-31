import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})

export class ApiHandlerService {

  API_ENDPOINT_URL: string;

  constructor(private httpClient: HttpClient) { }

  API_HOSTNAME(): string {
    if (this.API_ENDPOINT_URL == null) {
      this.API_ENDPOINT_URL = window.location.hostname;
    }
    return this.API_ENDPOINT_URL;
  }

  API_ENDPOINT = environment.api_endpoint;


  protected resolve(path: string): string {
    return this.API_HOSTNAME() + this.API_ENDPOINT + path;
  }

  public post(url: string, queryString?: any, data?: any): Observable<any> {
    // const options = this.createRequestOptions(queryString);
    return this.httpClient.post(this.resolve(url), data, {});
  }



}
