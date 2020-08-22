import { Component } from '@angular/core';
import { BreadcrumItem } from './components/breadcrum/breadcrum-item';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u-space';
  constructor(){
    

  }

}