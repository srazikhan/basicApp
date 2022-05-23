import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  @ViewChild("content",{static:true}) content!:ElementRef;

userForm!:FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,private toastr: ToastrService,
    private router:Router,
    private modalService: NgbModal,
    config: NgbModalConfig) {

    this.userForm = this.formBuilder.group({
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobileNo:['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password:['', Validators.required],
      dob:['', Validators.required],
      gender:['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
    config.backdrop = 'static';
    config.keyboard = false;     
   }

  ngOnInit(): void {
    
  }
 
 
  get fvalue() {return this.userForm.controls}

     onSubmit() {
      this.submitted = true;
      // console.log("sign-up form submitted")
      //this.modalService.open(this.content, { size: 'md', modalDialogClass: 'dark-modal' });
      
      if(this.userForm.invalid){
        return 
      }
      // console.log(this.userForm.value)
      const formData:any =this.userForm.value 
      const payLoad:any = {
        username:formData.username,
        email:formData.email,
        mobileNo:formData.mobileNo,
        password:formData.password,
        dob:formData.dob,
        gender:formData.gender,
        acceptTerms:formData.acceptTerms,
      }
      this.authService.signUp(payLoad).subscribe((res:any)=>{
        console.log(res)
        if(res.status == "success"){
          this.modalService.open(this.content, { size: 'md', modalDialogClass: 'dark-modal' });
        //  this.toastr.success('Account has been created');
         // this.router.navigate(["/auth/login"])
        }else if(res.status == "exist"){
          this.toastr.error('This email already exist');
        }
      })
     }
     navigateToLogin(){
       this.modalService.dismissAll();
       this.router.navigate(["/auth/login"])
     }

     
}
