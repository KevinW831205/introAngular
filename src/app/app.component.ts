import { Component } from '@angular/core';
import {HelloComponent} from "./hello/hello.component"
import {ServiceIntroService} from "./service-intro.service"
import { FirstServiceService } from './first-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introAngular';
  
  datas = {};

  constructor(private firstService : FirstServiceService){

  }

  ngOnInit(){
    this.datas = this.firstService.getData();
  }
}
