// import { Component, OnInit } from '@angular/core';
// import { File} from '../../../models/file.model';
// import {Folder} from '../../../models/folder.model';
// import {Sort} from '@angular/material/sort';



// @Component({
//   selector: 'app-list-share',
//   templateUrl: './list-share.component.html',
//   styleUrls: ['./list-share.component.scss']
// })
// export class ListShareComponent implements OnInit {
//   files: File[] = [
//     {
//       pictureURL :"https://4.imimg.com/data4/XF/HP/MY-16131088/shortcut-maths-500x500.jpg",
//       volume :'',
//       createDate: new Date('6/9/2020'),
//       owner:'',
//       icon : 'assignment',
//       name: 'Math.doc',
//     },
//     {
//       pictureURL :"https://images-na.ssl-images-amazon.com/images/I/71R58lgksxL.jpg",
//       volume :'',
//       createDate: new Date('18/9/2020'),
//       owner:'',
//       icon : 'picture_as_pdf',
//       name: 'Chemistry.pdf',
//     }
//   ];
//   sortedData: File[];
//   constructor() {
//     this.sortedData = this.files.slice();
//    }
//    sortData (sort: Sort) {
//     const data = this.files.slice();
//     if (!sort.active || sort.direction === '') {
//       this.sortedData = data;
//       return;
//     }
//     this.sortedData = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'name': return compare(a.name, b.name, isAsc);
//         case 'createDate': return compare( a.CreateDate, b.CreateDate, isAsc);
//               default: return 0;
//       }
//     }
//   )
//    }


//   ngOnInit(): void {
//   }
// }
// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
//   }


