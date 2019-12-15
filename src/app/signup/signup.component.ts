import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, MinLengthValidator, Form, ControlContainer,FormBuilder} from '@angular/forms'
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  title = 'reactiveassing';
  uploadForm: FormGroup; 
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  street: FormControl;
  city: FormControl;
  state: FormControl;
  zip:FormControl;
  genderForm: FormGroup;
  gender: FormControl;
  hobbies: FormControl;
  em: FormControl;
  age: FormControl;
  hob: FormControl;

  constructor( private route : RouterserviceService) {}
  ngOnInit() {

    this.firstName =  new FormControl('', [Validators.required,
      Validators.minLength(2)]),
    this.lastName=  new FormControl('', Validators.required),
    this.street = new FormControl('', Validators.required),
    this.city =  new FormControl('', Validators.required),
    this.state =  new FormControl('', Validators.required),
    this.zip =  new FormControl('', [Validators.required,Validators.min(100000),Validators.max(999999)]),
    this.em = new FormControl('',[Validators.email,Validators.required]),
    this.age = new FormControl('',[Validators.required]),

    this.gender = new FormControl('',[Validators.required]),

    this.genderForm = new FormGroup({ gender: this.gender}),

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
        street: this.street,
        city: this.city,
        state: this.state,
        zip:  this.zip,
        em: this.em,
        age: this.age,
        genderForm: this.genderForm,
      })
      
      
    
     
  }
  
  

  loginSubmit() {
    console.log(this.profileForm.value);
    this.route.routeToDashboard();

}
}
