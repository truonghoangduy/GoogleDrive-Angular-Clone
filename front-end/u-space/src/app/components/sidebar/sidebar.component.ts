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
    },
    {
      title:'Recent',
      icon: 'history',
    },
    {
      title:'Share',
      icon: 'folder_shared',
    },
    {
      title:'Pin',
      icon: 'push_pin',
    },
    {
      title:'Recycle Bin',
      icon: 'delete',
    },
    
  ]


  constructor(public auth:AuthService) { }


  ngOnInit(): void {
  }

}
export interface Iicon{
  title:string,
  icon:string
}
