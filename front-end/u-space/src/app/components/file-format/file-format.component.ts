import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/models/folder.model';

@Component({
  selector: 'app-file-format',
  templateUrl: './file-format.component.html',
  styleUrls: ['./file-format.component.scss']
})
export class FileFormatComponent implements OnInit {

  @Input() folders:Folder = null;

  constructor() { }

  ngOnInit(): void {
  }

}
