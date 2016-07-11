import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'second-screen-app',
  templateUrl: 'second-screen.component.html',
  styleUrls: ['second-screen.component.css']
})
export class SecondScreenAppComponent {
  cards: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.cards = af.database.list('cards');
  }
}
