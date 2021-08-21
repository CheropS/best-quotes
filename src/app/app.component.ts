import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string [];

  constructor () {
    this.quotes =['Be yourself, everyone else is taken', 'So many books, so little time', 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams', 'Be the change that you wish to see in the world']
  }
}
