import {Component, OnInit,ViewChild, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {MatSidenav} from '@angular/material/sidenav';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  screenWidth:number;
  constructor(){
   
  }
  clearIcon = false;
  txtSearch='';
   @Output() onShowMenu = new EventEmitter<any>();
  showMenu(){
    this.onShowMenu.emit();
  }
  clear(){
    this.txtSearch = '';
  }
  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        // console.log( this.screenWidth);
  }
}
