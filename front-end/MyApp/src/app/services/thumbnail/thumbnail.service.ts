import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { environment } from '../../../environments/environment'
const API_THUMNAIL = "file/thumbnail"
@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {
  // Services allow getting thumbnail with ( JWT Maybe )

  constructor(private http: HttpClient, private breadCrumbSrevices: BreadcrumbService) {


  }

  // Only handle directPath ( AKA filename + file extension)

  async getThumbnail(pathToFile: string):Promise<Blob>{
    console.log(pathToFile)
    return await this.http.get(environment.endpoint + API_THUMNAIL, {
      responseType: 'blob',
      headers: {
        'requestfile': this.breadCrumbSrevices.currentPath+"/.thumbnail/"+pathToFile+".png",
        'uuid': "falke",
      }
    }).toPromise()
  }

  // 'requestfile':pathToFile,
  // 'uuid':"falke",
  // responseType: 'blob'

}
