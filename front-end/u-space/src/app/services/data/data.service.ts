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
      pictureURL :"https://i.pinimg.com/originals/13/18/da/1318da95054a9ce6d7862f0ad0e67075.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Dog',
    },
    {
      pictureURL :"https://i.pinimg.com/originals/55/7d/5b/557d5b97378e2e85372da461af8712e2.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Lake',
    },
    {
      pictureURL :"https://www.hotelbaer.com/media/animation/mobile/hotelderbaer-header-wilderkaiser.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Mountain',
    },
    {
      pictureURL :"https://d3qvqlc701gzhm.cloudfront.net/thumbs/a0783dafe58b02c4895fc02c62dabac07078fdb210dc6f94a79fcd086a147a9b-750.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'sunset',
    },
    {
      pictureURL :"https://cdn4.eyeem.com/thumb/d7fb98f8824367eb611f6e2361641fabf4e38064-1552213862643/w/750",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Forest',
    },
    {
      pictureURL :"https://adventuresfrugalmom.com/wp-content/uploads/2019/08/Features-of-Minimalist-Interior-Design-that-Make-it-Stand-Out-from-North-Carolina-Lifestyle-Blogger-Adventures-of-Frugal-Mom.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Minimalist',
    },
    {
      pictureURL :"https://i.pinimg.com/originals/28/25/ac/2825ac8345a409611e65c6c4108b2532.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Cat',
    },
  ];

  thumbnail: Array<File> = [
    {
      pictureURL :"https://cdn4.eyeem.com/thumb/d7fb98f8824367eb611f6e2361641fabf4e38064-1552213862643/w/750",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Forest',
    },
    {
      pictureURL :"https://adventuresfrugalmom.com/wp-content/uploads/2019/08/Features-of-Minimalist-Interior-Design-that-Make-it-Stand-Out-from-North-Carolina-Lifestyle-Blogger-Adventures-of-Frugal-Mom.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Minimalist',
    },
    {
      pictureURL :"https://www.hotelbaer.com/media/animation/mobile/hotelderbaer-header-wilderkaiser.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Mountain',
    },
    {
      pictureURL :"https://i.pinimg.com/originals/28/25/ac/2825ac8345a409611e65c6c4108b2532.jpg",
      volume :'',
      createDate: new Date('1/1/16'),
      owner:'',
      icon : '',
      name: 'Cat',
    },
    
  ];
  public getDataBase1(){
    return this.db;
  }

  public getDataBase2(){
    return this.files;
  }

  public getDataBase3(){
    return this.thumbnail;
  }
  constructor() { }
}
