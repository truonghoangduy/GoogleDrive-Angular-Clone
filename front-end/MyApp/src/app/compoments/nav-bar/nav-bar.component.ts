import {Component, OnInit,ViewChild, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  screenWidth:number;
  constructor(public authService:AuthService){
  
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
