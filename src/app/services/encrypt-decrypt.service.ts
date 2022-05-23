import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() { }
  encryptData(data: any) {
    let encrypt: any = CryptoJS.AES.encrypt(data, environment.encryptSecretKey)
    return encrypt.toString()
  }

  decryptData(data: any): any {
    let decrept: any = CryptoJS.AES.decrypt(data, environment.encryptSecretKey).toString(CryptoJS.enc.Utf8);
    console.log(decrept)
    return decrept
  }
}
