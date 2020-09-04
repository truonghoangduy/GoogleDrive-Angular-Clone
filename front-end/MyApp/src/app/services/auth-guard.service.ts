import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private _router: Router, private api: ApiService, private afAuth: AngularFireAuth, private client: HttpClient) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    // throw new Error("Method not implemented.");
    console.log("Call check");

    return this.auth.Auth.authState.pipe(map(usr => {
      if (usr != null) {
        this.auth.user = usr;
        // this._router.navigate(['main-page'])
        return true;
      }

      console.log('NULL user');
      this._router.navigate([''])
      return false;
    }))
  }
}
