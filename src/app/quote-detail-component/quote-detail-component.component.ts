import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail-component',
  templateUrl: './quote-detail-component.component.html',
  styleUrls: ['./quote-detail-component.component.css']
})
export class QuoteDetailComponentComponent implements OnInit {

  @Input() quote!:Quotes;

  constructor() { 
    this
  }

  ngOnInit(): void {
  }

}
