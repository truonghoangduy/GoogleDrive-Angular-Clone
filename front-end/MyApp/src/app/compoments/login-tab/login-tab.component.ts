import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.scss']
})
export class LoginTabComponent implements OnInit {

  constructor(public auth:AuthService) { }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }
}
