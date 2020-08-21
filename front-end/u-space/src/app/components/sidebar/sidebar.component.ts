import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  listofIcon:Array<Iicon>=[
    {
      title:'U-Space',
      icon: 'perm_media',
      url: 'main-screen/',
    },
    {
      title:'Recent',
      icon: 'history',
      url: ''
    },
    {
      title:'Share',
      icon: 'folder_shared',
      url: 'share-page/',
    },
    {
      title:'Pin',
      icon: 'push_pin',
      url: '',
    },
    {
      title:'Recycle Bin',
      icon: 'delete',
      url: '',
    },
    
  ]


  constructor(public auth:AuthService) { }

  public navigateToPage(url:string){
    
  }

  ngOnInit(): void {
  }

}
export interface Iicon{
  title:string,
  icon:string,
  url: string,
}
