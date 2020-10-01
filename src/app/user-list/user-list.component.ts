import { Component, OnInit, OnChanges } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges {
  public users: string[];

  constructor(
    private serviceUser: UserServiceService
    // il faut probablement injecter un service ici !
  ) { }

  ngOnInit() {
    this.users;
    this.serviceUser;
    console.log("coucou2");
    // il faut initialiser les users ici avec le service
  }
  ngOnChanges() {
    this.users = this.serviceUser.users2.getValue();
    console.log("coucou2");
  }

}
