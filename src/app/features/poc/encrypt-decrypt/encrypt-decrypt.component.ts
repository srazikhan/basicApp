import { Component, OnInit } from '@angular/core';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';

@Component({
  selector: 'app-encrypt-decrypt',
  templateUrl: './encrypt-decrypt.component.html',
  styleUrls: ['./encrypt-decrypt.component.scss']
})
export class EncryptDecryptComponent implements OnInit {

  constructor(private encrptDecryptService: EncryptDecryptService) { }
  encrypt: any;
  decrypt: any;
  name: string = "shaziya"
  ngOnInit(): void {
    this.encryptedData();
    this.decryptedData();
  }
  encryptedData() {
    this.encrypt = this.encrptDecryptService.encryptData("shaziya@123gmail.com")
  }
  decryptedData() {
    this.decrypt = this.encrptDecryptService.decryptData(this.encrypt)
  }
}
