import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-details/user';
import { Router } from '@angular/router';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {  

  @Input() usersList : User[];
  currentUsersList : User[];
  constructor(private router: Router, private connectorService : ConnectorService) { }

  ngOnInit() {
    let currentURL = this.router.url;
    if(currentURL.includes('allUserDetails')){
      this.connectorService.getAllUserDetails().subscribe((result: User[]) => {
        this.currentUsersList = result;
      });
    }else {
      this.currentUsersList = this.usersList;
    }
    
  }

}
