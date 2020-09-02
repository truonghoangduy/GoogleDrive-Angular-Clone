import { Component, OnInit, Input } from '@angular/core';
import {File} from '../../models/file.model'

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  constructor() { }
  // @Input() thumbnails: File = null;
  thumbnails : File = 
  {  name: "abcsssssssssssssssssssssssssssssssssssssssssssss",
    // pictureURL: "https://www.optomaeurope.com/images/ProductApplicationFeatures/4kuhd/banner.jpg",
    volume: 'abc',
    createDate: "21/5/2020",
    owner: "string",
    icon :"add",
  }
 pic="https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg";
  ngOnInit(): void {
    if(this.thumbnails.pictureURL==null)
    this.thumbnails.pictureURL=this.pic;
  }
}
