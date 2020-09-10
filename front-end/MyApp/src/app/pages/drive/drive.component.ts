import {Component, ViewChild,OnInit} from '@angular/core';
import { HostListener } from "@angular/core";
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service'
import {FolderService} from '../../services/folder.service'
@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {
  
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private router:Router, public authService:AuthService, public folder:FolderService){}
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  navigated(path:string){
    this.router.navigate(["drive/"+path]);
    // console.log(path);
  }
  screenWidth:number;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.router.navigate(['drive','main-page'])
    // this.router.navigate(['drive',"share-page"])
 
  }
}
