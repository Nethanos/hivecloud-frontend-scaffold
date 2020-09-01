import { Component } from '@angular/core';
import { ApiHandlerService } from './services/api-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(apiHandlerService: ApiHandlerService) {

    
  }

  title = 'hivecloud-frontend-scaffold';
}
