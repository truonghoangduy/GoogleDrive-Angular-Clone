import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { ApiBrowseService } from './browse/api-browse.service';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import {saveFile} from '../ults/dowload-helper';
import { AuthService } from './auth.service';
const API_BIN = "bin"
const API_DOWNLOAD = "file"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public root = "http://localhost:4200";
  mainScreenDection = false
  constructor(public router: ActivatedRoute, private http: HttpClient,
    private browseServies: ApiBrowseService,
    private breadCrumServoces: BreadcrumbService,
    private authServices:AuthService
  ) {
    this.router.data.subscribe((route) => {
      route
    });

  }

  // validDefuatName(listofname:Array<string>){
  //   let indexName = "";
  //   let innerName =0;
  //   let namecount = listofname.map(name=>name.slice(0,10)).sort((a,b)=>parseInt(a) -parseInt(b));
  //   while(indexName != ""){
  //     innerName++;
  //     if (namecount.find((value)=>value==indexName.toString()) == undefined) {
  //       indexName = indexName;
  //     }

  //   }
  // }  
  // async getUsedSize(path:string){
  //   try {
  //     let result = await this.http.post(environment.endpoint+"info/sizeUsed",{
  //       root: path,
  //     } ).toPromise();
  //     return { ...result };
  //   } catch (error) {
  //     return { status: "failed", message: error };
  //   }

  // }

  async createFolder(name: string) { // NEW FOLDER AS DEFAUTLT
    let folders = await this.browseServies.getFolderV2(this.breadCrumServoces.currentPath);
    let listofDefautName = folders.folders.filter(name => name.includes("New Folder"))
  }

  


  async dowloadFile(path: string) {
    let index = path.split('/');
    let filename = index[index.length-1]
    console.log(path)
    try {
      let request = await this.http.get(environment.endpoint + API_DOWNLOAD, {
        responseType: 'blob',
        headers: {
          uuid: "admin",
          requestfile: path,

        }
      }).toPromise()
      console.log(filename)
      saveFile(request,filename)
      console.log(request);
    } catch (error) {

    }



  }

  async removeFolder(path: string) {
    // TODO FIX AUTH
    try {
      await this.http.post(environment.endpoint + API_BIN, {
        source: path
      }).toPromise()

    } catch (error) {
      console.log(error)
    }


    // UUID/A
    //B
    //C

    //  api brose UUID/A  => B C

    // api bin UUID/A/B

    //  api brose UUID/A  => C

  }

}
