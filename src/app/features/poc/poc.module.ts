import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { EditorComponent } from './editor/editor.component';
import { EncryptDecryptComponent } from './encrypt-decrypt/encrypt-decrypt.component';
import { DeviceDetectorComponent } from './device-detector/device-detector.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EncryptDecryptPipe } from 'src/app/core/pipes/encrypt-decrypt.pipe';
import { AngualrDilogComponent } from './angualr-dilog/angualr-dilog.component';
import { ConfirmDilogComponent } from './angualr-dilog/confirm-dilog/confirm-dilog.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { ChartsExampleComponent } from './charts-example/charts-example.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    PocComponent,
    EditorComponent,
    EncryptDecryptComponent,
    DeviceDetectorComponent,
    AngualrDilogComponent,
    ConfirmDilogComponent,
    GoogleMapComponent,
    ChartsExampleComponent,
    PaginationComponent,
    // EncryptDecryptPipe
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAPxbjbNOZxeY0DTzcil2dq1c5jLKE8OGk',
      libraries: ['places']
    })
    
  ]
})
export class PocModule { }
