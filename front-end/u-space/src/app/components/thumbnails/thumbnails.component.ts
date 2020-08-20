import { Component, OnInit, Input} from '@angular/core';
import {File}  from '../../models/file.model';


@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  
  @Input() file:File = null;

  constructor() { }

  ngOnInit(): void {
  }

}
