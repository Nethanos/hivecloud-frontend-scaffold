import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  resource_endpoint: string;

  constructor(resourceName: string, private apiHandler: ApiHandlerService) {
    this.resource_endpoint = resourceName;
   }

   create(resource: any, finalize?: boolean): Observable<any> {
     return this.apiHandler.post(this.resource_endpoint)
   }

}
