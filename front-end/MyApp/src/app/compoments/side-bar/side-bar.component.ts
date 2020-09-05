import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  @Output() navigateTo = new EventEmitter<string>();
   navigate(path : string){
     this.navigateTo.emit(path)
   }

  ngOnInit(): void {
  }

}
