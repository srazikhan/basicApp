import { Component, OnInit } from '@angular/core';
import { Editor,toHTML, Toolbar } from 'ngx-editor';
import { ngxConfig } from '../../../core/config/ngx-editor-config'
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  html: any;
  editor: Editor= new Editor();
  content:any;
  toolbar: Toolbar = ngxConfig;
  constructor() { }
 
  ngOnInit(): void {
  }
  getData(){
    const htmlTexEditor = toHTML(this.html);
    console.log(htmlTexEditor);
    this.content = htmlTexEditor;
  }
}

