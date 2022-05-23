import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngualrDilogComponent } from './angualr-dilog/angualr-dilog.component';
import { ChartsExampleComponent } from './charts-example/charts-example.component';
import { DeviceDetectorComponent } from './device-detector/device-detector.component';
import { EditorComponent } from './editor/editor.component';
import { EncryptDecryptComponent } from './encrypt-decrypt/encrypt-decrypt.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PocComponent } from './poc.component';

const routes: Routes = [
  { path: '', component: PocComponent ,children:[
    {path:"editor",component:EditorComponent,data : {title:'Editor'}},
    {path:"encrypt-decrypt",component:EncryptDecryptComponent,data : {title:'Encrypt-decrypt'}},
    {path:"device-detector",component:DeviceDetectorComponent,data : {title:'Device-detector'}},
    {path:"angular-dilog",component:AngualrDilogComponent,data : {title:'Angular-dilog'}},
    {path:"google-map",component:GoogleMapComponent,data : {title:'Google-map'}},
    {path:"chart-example",component:ChartsExampleComponent,data : {title:'Chart example'}},
    {path:"pagination",component:PaginationComponent,data : {title:'Pagination'}},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
