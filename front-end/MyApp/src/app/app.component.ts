import {Component} from '@angular/core';
import { BreadcrumbService } from '../app/services/breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';

  constructor(public breadServices:BreadcrumbService){


  }
}
