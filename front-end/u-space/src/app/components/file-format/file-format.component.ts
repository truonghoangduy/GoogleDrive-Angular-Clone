import { Component, OnInit } from '@angular/core';
import {FileFolderxService} from '../../services/file-folderx.service'
import {Section} from '../../models/file'

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
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',

    },
    {
      name: 'Kitchen Remodel',

    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
