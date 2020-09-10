import { Component, OnInit, Input } from '@angular/core';
import {File} from '../../models/file.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() file:string;
  @Input() numberOfModify:number;
  @Input() thumbnaileForShare:boolean;
  constructor(private http:HttpClient) {
    console.log(this.file)
   }
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
      this.thumbnails.pictureURL=this.pic;

  }
  }