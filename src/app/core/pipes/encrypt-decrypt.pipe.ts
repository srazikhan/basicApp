import { Pipe, PipeTransform } from '@angular/core';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';

@Pipe({
  name: 'encryptDecrypt'
})
export class EncryptDecryptPipe implements PipeTransform {

  constructor(private encryptDecryptService: EncryptDecryptService) { }
  transform(value: any, ...args: any[]): any {
    let finaldata: any
    finaldata = this.encryptDecryptService.decryptData(value);
    // console.log(value)
    return finaldata;
  }

}
