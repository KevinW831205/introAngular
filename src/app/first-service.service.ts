import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }

  getData() {
    console.log("first service")
    return [
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
  }
}
