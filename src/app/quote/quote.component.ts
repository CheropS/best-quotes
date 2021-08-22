import { Component, OnInit } from '@angular/core';
import { globalAgent } from 'http';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    {author:'Oscar Wilde', quote:'Be yourself, everyone else is taken'},
    {author: 'Mahtma Gandhi', quote: 'Be the change that you wish to see in the world'},
    {author: 'Frank Zappa', quote: 'So many books, so little time'},
    {author: 'Albert Einstein', quote:'Two things are infinite-the universe and human stupidity, and I am not sure about the universe.'},
    {author: 'Dr Seuss', quote: 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.'},
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
