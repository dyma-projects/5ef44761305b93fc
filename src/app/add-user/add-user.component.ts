import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(private serviceUser: UserServiceService
    // il faut probablement injecter un service ici !
  ) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.serviceUser.addUser(username)
      // on utilise le service ici pour ajouter l'utilisateur;
      this.el.nativeElement.value = '';
    }
  }

}
