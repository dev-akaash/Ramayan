import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Demo } from "../data";

@Injectable({
    providedIn: 'root'
})
export class NameService {
    ramayanData = new Demo
  
    constructor(){
    }

    getPage(id:any){
      return  this.ramayanData.ramayan.filter(data=>data.categoryId ==id)
    }


   
}