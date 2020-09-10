import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() folders;
  @Input() numberOfModify:number;
  constructor() { }
  ngOnInit(): void {
  }


  public openFolder(){
    // this.router.navigate(["/folder-format"]);
  }



}
