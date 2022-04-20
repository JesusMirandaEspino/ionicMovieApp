import { Pipe, PipeTransform } from '@angular/core';

const urlImg = 'https://image.tmdb.org/t/p/w';

@Pipe({
  name: 'imgResp'
})
export class ImgRespPipe implements PipeTransform {

  transform(imgUrl: string, size: string = '500'): string {

    if( imgUrl ){
      return `${urlImg}${size}/${imgUrl}`;
    }else{
      return './assets/img/no-image-banner.jpg';
    }



  }

}
