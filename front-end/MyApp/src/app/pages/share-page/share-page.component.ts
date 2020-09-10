import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit {

  constructor(private apiServices:ApiService) { }

  ngOnInit(): void {
    this.apiServices.getShareList().then((value)=>{
      console.log(value)
    })
  }


}
