import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EncryptDecryptPipe } from '../core/pipes/encrypt-decrypt.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';


const toBeExported = [
  FormsModule,
  ReactiveFormsModule,
  NgxEditorModule,
  HttpClientModule,
  ToastrModule.forRoot(),
  NgxChartsModule 
]
const AMList = [
  MatDatepickerModule,
  MatButtonModule,
  MatInputModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
]
const ngBootstrap = [
  NgbPaginationModule,
  NgbAlertModule,
 
]

@NgModule({
  declarations: [
    EncryptDecryptPipe
  ],
  imports: [
    CommonModule,
    toBeExported,
    AMList,
    ngBootstrap
    
  ],
  exports:[
    toBeExported,
    AMList,
    ngBootstrap,
    EncryptDecryptPipe
  ]
})
export class SharedModule { }
