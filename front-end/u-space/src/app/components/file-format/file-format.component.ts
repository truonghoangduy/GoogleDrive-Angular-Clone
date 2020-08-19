import { Component, OnInit } from '@angular/core';
import {Section} from '../../../app/models/folder.model'

@Component({
  selector: 'app-file-format',
  templateUrl: './file-format.component.html',
  styleUrls: ['./file-format.component.scss']
})
export class FileFormatComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
    },
    {
      name: 'Recipes',

    },
    {
      name: 'Work',

    }
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
