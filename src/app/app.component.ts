import {Component} from '@angular/core';
import {Employee} from './models/employee.model';
import {FormPoster} from './services/form.poster';
import {NgForm} from '@angular/forms'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["Angular","ReactJs","NodeJs"]
  model = new Employee('John','12345','Andrew','a@a.com',1234567890,true,'male','Angular')
  hasCodeLangError=false
  submitDisable=false

  constructor(private formPoster:FormPoster){}

  firstToUpper(value:string):void{
      if(value.length>0)
        this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
      else
        this.model.firstName = value
    }

    submitForm(form:NgForm){
     this.formPoster.postEmployeeForm(this.model)
        .subscribe(
          data=> console.log('success',data),
          err => console.log('error',err)
        )
    }

  validateCodeLang(event):void{
    if(this.model.codeLang === "default"){
      this.hasCodeLangError = true;
      this.submitDisable = true;
    }else{
      this.hasCodeLangError = false;
      this.submitDisable = false;
    }
  }
  }

  /*
  ng-untouched  ng-pristine  ng-valid
  ng-touched    ng-dirty      ng-invalid */
