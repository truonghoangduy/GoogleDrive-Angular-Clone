import { Component, OnInit } from '@angular/core';
import {VirtualFile} from '../../models/file.model'

@Component({
  selector: 'app-thumbnails-head',
  templateUrl: './thumbnails-head.component.html',
  styleUrls: ['./thumbnails-head.component.scss']
})
export class ThumbnailsHeadComponent implements OnInit {
  files: VirtualFile[] = [
    {
      uuid:"Asdasda",
      pictureURL :"https://material.angular.io/assets/img/examples/shiba2.jpg",
      volume :'',
      createDate: new Date('1/1/16').toUTCString(),
      owner:'',
      icon : '',
      name: 'Shiba-inu',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
