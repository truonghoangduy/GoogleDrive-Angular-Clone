import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { ThumbnailService } from '../../services/thumbnail/thumbnail.service'
@Directive({
  selector: 'img[appLazyloadthumbnail]'
})
export class LazyloadthumbnailDirective {

  @Input() fileLocation:string;


  imgElement: HTMLImageElement
  constructor(private elm: ElementRef<HTMLImageElement>, private thumbnailServices: ThumbnailService) {
    this.imgElement = elm.nativeElement;

    console.log("okokok" + this.fileLocation)
  }

  protected ngOnChanges() {
    console.log("change")
    console.log('fileLocation', this.fileLocation);
    this.getThumbNail(this.fileLocation).then(newURL=>this.elm.nativeElement.src = newURL).catch(()=>{
      this.elm.nativeElement.src ="https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg"
    })

  }

  

  getThumbNail(path:string):Promise<string>{
    try {
      return this.thumbnailServices.getThumbnail(path).then((pictureBuffer) => {
        const reader = new FileReader()
        return new Promise((resolve, reject) => {
          reader.readAsDataURL(pictureBuffer),
            reader.onloadend = () => resolve(reader.result as string)
        }
  
          // reader.readAsDataURL(pictureBuffer)      
        )
        // = 
        // elm.nativeElement.src = 
      })
    } catch (error) {
      return new Promise((resolve, reject)=>{
        resolve("https://images.foody.vn/res/g88/876281/s800/foody-ga-chien-chicken-plus-740-637148089657120363.jpg")
      })
    }
  }

}
