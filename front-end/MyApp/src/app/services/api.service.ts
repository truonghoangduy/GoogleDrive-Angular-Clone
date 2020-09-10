import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { ApiBrowseService } from './browse/api-browse.service';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import {saveFile} from '../ults/dowload-helper';
import {BinInfo} from '../models/bin.model'

const API_CREATEFOLDER="createFolder"
const API_RESTORE ='restore'
import { AuthService } from './auth.service';
const API_BIN = "bin"
const API_DOWNLOAD = "file"
const API_SHARE ='share'
const API_GET_SHARE_LIST ='renderShare'
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
          uuid: "duybeo",
          requestfile: path,
        }
      }).toPromise()
      console.log(filename)
      saveFile(request,filename)
      console.log(request);
    } catch (error) {

    }



  }

  async reStore(binUUID:string){
    console.log(binUUID)
    try {
      let respone =  await this.http.post(environment.endpoint +API_RESTORE,
        {
        folderUUID:binUUID,
        onwerUUID:this.authServices.user.email
      }).toPromise()
      return respone
    } catch (error) {
      return null;
    }

  }

  async getShareList(){
    return await this.http.post(environment.endpoint + API_GET_SHARE_LIST,{
      "receiver":'kien'
    }).toPromise();
  }

  getBinList(){
    try {
      let salt = Date.now()
      return this.http.get<Array<Array<BinInfo>>>(environment.endpoint + API_BIN+"?salt="+salt, {

        headers:new HttpHeaders({
          
          uuid:this.authServices.user.email,
        }),
        
      })
    } catch (error) {
      console.log("FAIL PARSING")
      return null;
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
