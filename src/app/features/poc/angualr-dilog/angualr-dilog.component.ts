import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDilogComponent } from './confirm-dilog/confirm-dilog.component';

@Component({
  selector: 'app-angualr-dilog',
  templateUrl: './angualr-dilog.component.html',
  styleUrls: ['./angualr-dilog.component.scss']
})
export class AngualrDilogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    // const dialogRef = this.dialog.open(ConfirmDilogComponent,{data:{message:"Coming from AngualrDilogComponent"}});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

    this.dialog.open(ConfirmDilogComponent,{data:{message:"Coming from AngualrDilogComponent"}});

    setTimeout(()=>{
      console.log("close your open dialog");
      this.dialog.closeAll()
    },5000)

  }
}
