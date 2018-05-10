import {Component} from '@angular/core';
import {Employee} from './models/employee.model'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["Angular","ReactJs","NodeJs"]
  model = new Employee('John','Andrew',true,'male','Angular')

  firstToUpper(value:string):void{
      if(value.length>0)
        this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
      else
        this.model.firstName = value
    }
  }
