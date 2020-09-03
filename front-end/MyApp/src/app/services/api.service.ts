import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public root = "http://localhost:4200";
  mainScreenDection = false
  constructor(public router:ActivatedRoute){
    this.router.data.subscribe((route)=>{
      route
    });

  }}
