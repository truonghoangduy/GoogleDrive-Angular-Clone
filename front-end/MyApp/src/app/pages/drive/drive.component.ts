import {Component, ViewChild,OnInit} from '@angular/core';
import { HostListener } from "@angular/core";
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {
  
  screenWidth:number;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router:Router){}
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  navigated(path:string){
    this.router.navigate(["drive/"+path]);
    // console.log(path);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        // console.log( this.screenWidth);
  }

  ngOnInit(): void {
    this.getScreenSize(); 
    this.router.navigate(["drive/"]);
 
  }
}
