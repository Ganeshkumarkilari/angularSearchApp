import { Component } from '@angular/core';
import { ConnectorService } from './connector.service';
import { User } from './user-details/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data';
  response:User;
  constructor(private connector : ConnectorService) { }

  
  ngOnInit() {
  }



}
