import { Component, OnInit } from '@angular/core';
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  selectedcard!:any;
  collapsed=true;
  details={
    Id:0,
    Name:'',
    Email:'',
    Age:'',
    Gender:'',
    JoinDate: new Date()
  }
  baseUrl='https://a707-116-72-9-56.in.ngrok.io/api/users/';
   list :any;


  constructor(private api:HTTP) {


  }

  ngOnInit() {

  }

  onDelete(id:number){
    this.api.delete(this.baseUrl+id,{},{});
    this.onLoad();
  }
  onCreate(){
    console.log(this.details)
     this.api.post(this.baseUrl,this.details,{}).then(res=>{
       console.log(res);
   })
   this.onLoad();
  }
  onUpdate(id:number){
    this.details.Id=id
    console.log(id)
    this.api.post(this.baseUrl,this.details,{}).then(res=>{
      console.log(res);
  })
  this.onLoad();
  }

     async onLoad(){
      const option={
          'Content-Type':'application/json'

      }
      this.api.setHeader('Access-Control-Allow-Origin','https://a707-116-72-9-56.in.ngrok.io/api/user','');
      await this.api.get(this.baseUrl,{},{}).then(res=>{
        this.list=res
        console.log(res)
        this.list=JSON.parse(this.list['data'])
        console.log(this.list)

      })
    }
}
