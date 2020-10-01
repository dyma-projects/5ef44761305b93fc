import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public users2 = new BehaviorSubject<string[]>([]);
  constructor() { }
  ngOnInit() {

    
  }
  addUser(valeur: string[]) {
    //this.users.next("valeur avant la souscription", this.users.value() );

    this.users2.next(valeur);
    this.users2.subscribe(valeur => console.log('coucou' + valeur));
    console.log("la valeur de mon autre objet est ", this.users2.getValue())
   

  }
}
