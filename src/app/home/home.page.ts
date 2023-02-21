import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  baseUrl='https://ddc3-116-72-9-56.in.ngrok.io/api/users';
   list :any;

  constructor(private http:HttpClient,private api:HTTP) {

  }


  onDelete(){

  }
  onCreate(){

  }
  onUpdate(){

  }

     async onLoad(){
      const option={
          'Content-Type':'application/json'

      }
      this.api.setHeader('Access-Control-Allow-Origin','https://ddc3-116-72-9-56.in.ngrok.io/api/users','');
      await this.api.get(this.baseUrl,{},option).then(res=>{
        this.list=res
        console.log(res)
        this.list=JSON.parse(this.list['data'])
        console.log(this.list)

      })
    }
}
