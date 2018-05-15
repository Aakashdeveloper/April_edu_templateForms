import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Employee} from  '../models/employee.model';

@Injectable()

export class FormPoster{

    constructor(private _http:Http){}

    private extractData(res:Response){
        let body= res.json();
        return body.fields || {}
    }

    private handleError(error:any){
        return Observable.throw(error.statuText);
    }

    postEmployeeForm(employee:Employee):Observable<any>{
        console.log("posting data in service",employee)
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers})


        return this._http.post('http://localhost:3200/postemployee', body,options)
                .map(this.extractData)
                .catch(this.handleError)
    }
}