import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text = "testing"

  updateValue(event){
    console.log(event);
    this.text = event.target.value

  }

}
