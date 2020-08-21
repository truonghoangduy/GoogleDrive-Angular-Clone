import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { VirtualFileService } from 'src/app/services/file/virtual-file.service';

import { VirtualFile } from 'src/app/models/file.model';

@Component({
  selector: 'app-render-test',
  templateUrl: './render-test.component.html',
  styleUrls: ['./render-test.component.scss']
})
export class RenderTestComponent implements OnInit {

  constructor(public data:VirtualFileService) {
    // data.makeSreachable();
   }

  ngOnInit(): void {
  }

}
