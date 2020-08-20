import { Component, OnInit, Input } from '@angular/core';
import {File} from '../../models/file.model'

@Component({
  selector: 'app-thumbnails-head',
  templateUrl: './thumbnails-head.component.html',
  styleUrls: ['./thumbnails-head.component.scss']
})
export class ThumbnailsHeadComponent implements OnInit {

  @Input() thumbnails: File = null;

  constructor() { }

  ngOnInit(): void {
  }

}
