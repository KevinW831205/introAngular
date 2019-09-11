import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVar = "123"

  clickFun(){
    console.log("clicked")
  }

  // constructor() {
  //   this.myVar = ""
  //   setInterval(()=>{
  //     this.myVar = Math.random().toString()
  //   },500)



  // }

  ngOnInit() {
  }

}
