import { Component, OnInit } from '@angular/core';
import { BreadcrumItem } from 'src/app/components/breadcrum/breadcrum-item';
import { Router, RouterLink } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(["drive/"+'main-screen'])
  }


  public navigateToPage(url:string){
    this.router.navigate(["drive/"+url])
    // this.navigateTo.emit(url);
  }
  
  
  

}
