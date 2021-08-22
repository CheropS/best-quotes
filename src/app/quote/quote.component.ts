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
    {author:'Oscar Wilde', quote:'Be yourself, everyone else is taken', description:'It is great to be yourself'},
    {author: 'Mahtma Gandhi', quote: 'Be the change that you wish to see in the world', description:'change is good'},
    {author: 'Frank Zappa', quote: 'So many books, so little time', description:'books are life'},
    {author: 'Albert Einstein', quote:'Two things are infinite-the universe and human stupidity, and I am not sure about the universe.', description:'universe and stupidity'},
    {author: 'Dr Seuss', quote: 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.', description:'sleep and reality'},
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
