import { Component, OnInit } from '@angular/core';
// import { globalAgent } from 'http';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
   new Quotes ('Oscar Wilde','Be yourself, everyone else is taken', 'love'), 
    new Quotes ('Mahtma Gandhi', 'Be the change that you wish to see in the world', 'change'),
    new Quotes('Frank Zappa', 'So many books, so little time','books are life'),
    new Quotes('Albert Einstein','Two things are infinite-the universe and human stupidity, and I am not sure about the universe.','universe and stupidity'),
    new Quotes ('Dr Seuss', 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.', 'sleep and reality'),
  ];

  addNewQuote(quote:any) {
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
