import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import 'rxjs/add/operator/toPromise';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";

@Component({
  selector: "app-example",
  template: `
    <div class="row">
      <div class="m-t-1">
        <button class="btn btn-primary" (click)="doGET()">GET</button>
        <button class="btn btn-primary" (click)="doPOST()">POST</button>
        <button class="btn btn-primary" (click)="doPUT()">PUT</button>
        <button class="btn btn-primary" (click)="doDELETE()">DELETE</button>
      </div>

      <div class="row">
        <div class="m-t-1">
          <button class="btn btn-secondary" (click)="doGETAsPromise()">
            As Promise
          </button>
          <button class="btn btn-secondary" (click)="doGETAsPromiseError()">
            Error as Promise
          </button>
          <button class="btn btn-secondary" (click)="doGETAsObservableError()">
            Error as Observable
          </button>
        </div>
      </div>

      <div class="row">
        <div class="m-t-1">
          <button class="btn btn-danger" (click)="doGETWithHeaders()">
            With Headers
          </button>
        </div>
      </div>
    </div>
  `
})
export class HttpReqRespExample {
  apiRoot: string = "http://httpbin.org";
  constructor(private http: HttpClient) {}

  doGET() {
    console.log("Get Example");
    //alert("Hello");
    let url = "${this.apiRoot}/get";  

    let params = new HttpParams({ fromString: "'foo'='moo'& limit=25" });
    params = params.append("foo", "moo").append("limit", "25");

      alert(this.http
      .get(url, { params: params })
      .subscribe(res => console.log(JSON.stringify(res))));
  }

  doPost() {
    console.log("Do Post");
     let url = "${this.apiRoot}/get";
     let params = new HttpParams({ fromString: "'foo'='moo'& limit=25" });
     params = params.append("foo", "moo").append("limit", "25");

     this.http.post(url, {moo:"foo", goo:"loo"}, {params: params}).subscribe(res =>
     console.log(JSON.stringify(res)));

  }

  doPut() {
    console.log("Do Put");

    console.log("Do Post");
     let url = "${this.apiRoot}/get";
     let params = new HttpParams({ fromString: "'foo'='moo'& limit=25" });
     params = params.append("foo", "moo").append("limit", "25");

     this.http.put(url, {moo:"foo", goo:"loo"}, {params: params}).subscribe(res =>
     console.log(JSON.stringify(res)));
  }
  doDelete(){
    console.log("Do Post");
     let url = "${this.apiRoot}/get";
     let params = new HttpParams({ fromString: "'foo'='moo'& limit=25" });
     params = params.append("foo", "moo").append("limit", "25");

     this.http.delete(url, {params: params}).subscribe(res =>
     console.log(JSON.stringify(res)));
  }

  doGetAsPromise() {
    console.log("Do Get As Promise");
  }

  doGetAsPromiseError() {
    console.log("Do Get As Promise Error");
  }

  doGetAsObservableError() {
    console.log("Do Get As Observable Error");
  }

  doGETWithHeaders(){
    console.log("Get with Header");
      //lets opts: RequestOtions
  }
}
