import { Component } from '@angular/core';
import{Http,Response,Headers}from'@angular/http';
import'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'Angular 2';
   mydetails:any;

  constructor( private m:Http)
  {
    
  }
  fetchData()
  {
    this.m.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (res:Response)=>{this.mydetails=res.json()}
    )
  }
  ngOnInit()
  {
    this.fetchData();
  }

}
