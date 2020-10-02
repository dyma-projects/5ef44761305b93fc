import { Component, OnInit, OnChanges } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(
    private serviceUser: UserServiceService
    // il faut probablement injecter un service ici !
  ) { }

  ngOnInit() {
    this.serviceUser.users2.subscribe((users) => {
      this.users = users;
    });
    console.log("coucou2");
    // il faut initialiser les users ici avec le service
  }
}
