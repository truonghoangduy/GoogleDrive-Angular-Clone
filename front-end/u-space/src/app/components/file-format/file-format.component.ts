import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/models/folder.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-format',
  templateUrl: './file-format.component.html',
  styleUrls: ['./file-format.component.scss']
})
export class FileFormatComponent implements OnInit {

  @Input() folders:Folder = null;

  constructor(private router:Router) { }

  public openFolder(){
    this.router.navigate(["/folder-format"]);
  }


  ngOnInit(): void {
  }

}
