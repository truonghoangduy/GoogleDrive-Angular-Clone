import { Component, OnInit,HostListener } from '@angular/core';
import {FolderService} from '../../services/folder.service';
import { Folder } from 'src/app/models/folder.model';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  // db :Array<Folder>=[];
  constructor(public folerService: FolderService) { }

  screenWidth:number;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getScreenSize(); 
 
  }
}
