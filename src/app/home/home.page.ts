import { NameService } from './data.service';
import { Component } from '@angular/core';
import { Demo } from "../data";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = new Demo
  ramayan:any
 
  constructor(private _service:NameService) {
    this.ramayan = this.data.ramayan;
    console.log(this._service.getPage(2));
    
        
  }



}
