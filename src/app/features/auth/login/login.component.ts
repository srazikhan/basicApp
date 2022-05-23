import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,private toastr: ToastrService,private roter:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }
  get fvalue() { return this.loginForm.controls };
  loginSubmit() {
    this.submitted = true;
    // console.log("sign-up form submitted")
    if (this.loginForm.invalid) {
      return
    }
    // console.log(this.loginForm.value)
    const loginFormData:any = this.loginForm.value
    this.authService.login(loginFormData).subscribe((res:any)=>{
      // console.log(res)
      if(res.status == "success"){
        this.toastr.success('Login Successfully');
        localStorage.setItem("token",res.token);
        this.roter.navigate(["/main/dashboard"])
      }else if(res.status == "email_not_exist"){
        this.toastr.error('Please enter valid email');
      }else if(res.status == "password_not_exist"){
        this.toastr.error('Please enter valid password'); 
      }
    })
  }
}

