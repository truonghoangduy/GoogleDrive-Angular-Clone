import { Component, OnInit } from '@angular/core';
import {File} from '../../../models/file.model'

@Component({
  selector: 'app-by-so',
  templateUrl: './by-so.component.html',
  styleUrls: ['./by-so.component.scss']
})
export class BySOComponent implements OnInit {
  files: File[] = [
    {
      pictureURL :"",
      volume :'',
      createDate: new Date('6/8/2020'),
      owner:'',
      icon : 'assignment',
      name: 'Tài liệu.doc',
    },
    {
      pictureURL :"",
      volume :'',
      createDate: new Date('8/8/2020'),
      owner:'',
      icon : 'picture_as_pdf',
      name: 'Tài liệu.pdf',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
