import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public root = "http://localhost:4200";
  mainScreenDection = false
  constructor(public router:ActivatedRoute,private http:HttpClient){
    this.router.data.subscribe((route)=>{
      route
    });

  }

  removeFolder(){
    // UUID/A
              //B
              //C

    //  api brose UUID/A  => B C

    // api bin UUID/A/B

        //  api brose UUID/A  => C

  }

}
