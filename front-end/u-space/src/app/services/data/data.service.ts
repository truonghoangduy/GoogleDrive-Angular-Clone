import { Injectable } from '@angular/core';
import {File} from '../../models/file.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db = [
    {
      name: 'Photos',
    },
    {
      name: 'Recipes',
    },
    {
      name: 'Work',
    }
  ];

  files: Array<File> = [
    {
      pictureURL :"https://material.angular.io/assets/img/examples/shiba2.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Shiba-inu',
    }
  ];

  // thumbnail:  Array<File>  = [
  //   {
  //     pictureURL :"https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     volume :'',
  //     createDate: new Date('1/1/16'),
  //     owner:'',
  //     icon : '',
  //     name: 'Shiba-inu',
  //   }
  // ];

  public getDataBase1(){
    return this.db;
  }

  public getDataBase2(){
    return this.files;
  }

  // public getDataBase3(){
  //   return this.thumbnail;
  // }
  constructor() { }
}
