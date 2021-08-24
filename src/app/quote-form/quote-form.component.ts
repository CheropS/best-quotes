import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote=new Quotes (" ", " ", " ", new Date());
  @Output() addQuote=new EventEmitter<Quotes>();

  submitQuote(goalForm:NgForm) {
    this.addQuote.emit(this.newQuote);
    console.log(this.addQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
