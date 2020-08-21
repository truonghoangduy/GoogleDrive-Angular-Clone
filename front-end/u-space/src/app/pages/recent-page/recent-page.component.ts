import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-recent-page',
  templateUrl: './recent-page.component.html',
  styleUrls: ['./recent-page.component.scss']
})
export class RecentPageComponent implements OnInit {

  constructor(public dataService: DataService) { }

  db_1 = [];
  
  ngOnInit(): void {
    this.db_1 = this.dataService.getDataBase2();
  }

}
