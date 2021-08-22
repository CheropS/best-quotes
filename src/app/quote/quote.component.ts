import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    {author:'Oscar Wilde', quote:'Be yourself, everyone else is taken', title:'Self-Love'},
    {author: 'Mahtma Gandhi', quote: 'Be the change that you wish to see in the world', title:'Change'},
    {author: 'Frank Zappa', quote: 'So many books, so little time', title:'Books'},
    {author: 'Albert Einstein', quote:'Two things are infinite-the universe and human stupidity, and I am not sure about the universe.', title:'Humans'},
    {author: 'Dr Seuss', quote: 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.', title:'Love'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
