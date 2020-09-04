import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { map, last, catchError } from 'rxjs/operators';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore,private http: HttpClient) {
    
    this.Getdata();
   }

  listitem:any=[];
  ngOnInit() {
  
    this.startUpload();
    
  }

  async Getdata(){
    let allDocs =  this.db.collection('files').get().toPromise();
    (await allDocs).forEach((value)=>{
      this.listitem.push(value.data())
      console.log(this.listitem)
    })    
   
  }// Cho` duoc goi


  // async uploadFile(file:File){
  //   let form = new FormData();
  //   form.append("uploadDir","admin/abcasd/hola/bello/")
  //   form.append("file",file);
  //   var result = new HttpRequest('POST',"http://localhost:3000/upload",form,{
  //     reportProgress: true,
  //   });

  //   return await this.http.request(result).toPromise()
    
  // }

  async startUpload() {

    // await this.uploadFile(this.file)
    
    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        await this.db.collection('files').add( { downloadURL: this.downloadURL, path });
        // this.db.collection('users').doc('files').set({downloadURL: this.downloadURL, path});
        this.Getdata()
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}