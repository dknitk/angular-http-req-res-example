import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'http-example',
  templateUrl:'./http.req.res.example.html'
})

export class HttpReqRespExample{

  apiRoot: string = "http://httpbin.org";
  constructor(private http: HttpClient){}

  doGET(){
    console.log("Get Example");
    let url = '${this.apiRoot}/get';

    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));

  }

}