import { Component, OnInit} from '@angular/core';
import {File}  from '../../models/file.model';


@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  files: File[] = [
    {
      pictureURL :"https://material.angular.io/assets/img/examples/shiba2.jpg",
      volume :'',
      createDate: '',
      owner:'',
      icon : '',
      name: 'Shiba-inu',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
