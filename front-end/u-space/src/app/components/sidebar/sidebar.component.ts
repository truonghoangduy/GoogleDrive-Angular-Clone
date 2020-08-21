import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Iicon} from '../../models/list.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  listOfIcon:Array<Iicon>=[
    {
      title:'U-Space',
      icon: 'perm_media',
      url: '/main-screen',
    },
    {
      title:'Recent',
      icon: 'history',
      url: '/recent-page'
    },
    {
      title:'Share',
      icon: 'folder_shared',
      url: '/share-page',
    },
    {
      title:'Pin',
      icon: 'push_pin',
      url: '/pin-page',
    },
    {
      title:'Recycle Bin',
      icon: 'delete',
      url: '/recycle-page',
    },
    
  ]


  constructor(public auth:AuthService,
              private router: Router) { }

  

  public findItem(id:string):Iicon{
    var matchItem:Iicon;
      for (let item of this.listOfIcon) {
        if (item.url == id) {
          matchItem = item;
        }
      }
      return matchItem;
    }
  public navigateToPage(url:string){
    this.router.navigate([url])
  }


  ngOnInit(): void {
  }

}

