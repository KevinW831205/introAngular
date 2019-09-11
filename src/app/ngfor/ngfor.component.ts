import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  datas = [
    {
      name: "a",
      number: "1"
    },
    {
      name: "b",
      number: "2"
    },
    {
      name: "c",
      number: "3"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
