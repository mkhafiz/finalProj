import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  msg='';

  signupRequestPayload: SignupRequestPayload;
  signupForm!: FormGroup;

  constructor(private authService: AuthserviceService, private router: Router,
    private toastr: ToastrService, formBuilder: FormBuilder) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };


    this.signupForm = formBuilder.group({
      email: new FormControl('', 
            Validators.compose([Validators.required, Validators.minLength(6)]))
    });




  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(6)] ),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }

  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email')?.value;
    this.signupRequestPayload.username = this.signupForm.get('username')?.value;
    this.signupRequestPayload.password = this.signupForm.get('password')?.value;

    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      });
  }

}
