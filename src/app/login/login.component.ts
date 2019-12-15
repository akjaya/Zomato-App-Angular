import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, MinLengthValidator, Form, ControlContainer, FormBuilder} from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileLogin: FormGroup;
  username = new FormControl();
  password = new FormControl();
  submitMessage: string;

  constructor(private rout: RouterserviceService, private auth: AuthenticationService) { }

  ngOnInit() {


    this.username = new FormControl('', [Validators.required, Validators.minLength(2)]),
    this.password = new FormControl('', [Validators.required]),

    this.profileLogin = new FormGroup({
      username: this.username,
      password: this.password
    });
  }
  loginSubmit() {

    console.log(this.username.value);
    console.log(this.password.value);

    this.auth.authenticateUser(this.profileLogin.value).subscribe(
      data => {
        console.log(data);
        this.auth.setBearerToken(data['token']);
        this.rout.routeToDashboard(); },
      error => {
       if (error.status === 404) {
          this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found'; }
       if (error.status === 403) {
          this.rout.routeToSignUp();
       }
    });



    }

}
