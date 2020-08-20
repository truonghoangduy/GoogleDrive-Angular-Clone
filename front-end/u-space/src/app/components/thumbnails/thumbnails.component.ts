import { Component, OnInit} from '@angular/core';
import {VirtualFile}  from '../../models/file.model';


@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  files: VirtualFile[] = [
    {
      uuid:"",
      pictureURL :"https://material.angular.io/assets/img/examples/shiba2.jpg",
      volume :'',
      createDate: new Date ().toUTCString(),
      owner:'',
      name: 'Shiba-inu',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
