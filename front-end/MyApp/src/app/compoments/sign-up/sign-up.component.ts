import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  constructor(public auth:AuthService) { }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }
  
 
  


}
