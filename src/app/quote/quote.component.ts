import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
// import { globalAgent } from 'http';
// import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
  new Quotes ('Oscar Wilde','Be yourself, everyone else is taken', 'John', new Date(2020,1,19)), 
  new Quotes ('Mahtma Gandhi', 'Be the change that you wish to see in the world', 'Sharry', new Date(2021,2, 21)),
  new Quotes('Frank Zappa', 'So many books, so little time','Lauryn', new Date (2021,3,13)),
  new Quotes('Albert Einstein','Two things are infinite-the universe and human stupidity, and I am not sure about the universe.','Redempter', new Date (2021,4,5)),
  new Quotes ('Dr Seuss', 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.', 'Allan', new Date (2021,5,3)),
    ];

  votes:number=0;
    likes(){
      this.votes++;
    }
    dislike(){
      this.votes--;
    }
    
  addNewQuote(quote:any) {
    let quoteObject=new Quotes(quote.author, quote.quote, quote.description, new Date)
    // quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quoteObject);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
