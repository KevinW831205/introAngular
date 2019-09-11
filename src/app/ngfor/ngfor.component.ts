import { Component, OnInit } from '@angular/core';
import { ServiceIntroService } from '../service-intro.service';
import { FirstServiceService } from '../first-service.service';



@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  
  datas = {};

  constructor(private firstService: FirstServiceService){

  }

  ngOnInit(){
    this.datas=this.firstService.getData();

  }

}
