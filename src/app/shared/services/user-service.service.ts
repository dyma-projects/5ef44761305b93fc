import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userstab = [];
  public users2 = new BehaviorSubject<string[]>([]);
  constructor() { }
  ngOnInit() {

    
  }
  addUser(valeur: string) {
    //this.users.next("valeur avant la souscription", this.users.value() );
    this.userstab.push(valeur);
    this.users2.next(this.userstab);
  }
}
