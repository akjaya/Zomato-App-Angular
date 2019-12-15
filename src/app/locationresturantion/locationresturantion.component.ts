import { Component, OnInit } from '@angular/core';
import {ZomatoserviceService } from '../zomatoservice.service';
import {Resturants} from '../resturants';
import { FormGroup, FormControl, FormArray, Validators, MinLengthValidator, Form, ControlContainer, FormBuilder} from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-locationresturantion',
  templateUrl: './locationresturantion.component.html',
  styleUrls: ['./locationresturantion.component.css']
})
export class LocationresturantionComponent implements OnInit {
  location_entry: FormGroup;
  location = new FormControl();
  obj : Resturants = new Resturants();
  id :  number;
  data_array : any ;
  resturant_inforarray : Array<any> = [];
  errMessage: string;
  click_id :number;
  constructor(private zomatoservice: ZomatoserviceService, private rout: RouterserviceService) { 
  
;  }

  ngOnInit() {
    this.location = new FormControl('', [Validators.required, Validators.minLength(2)]),
    this.location_entry = new FormGroup({
      location: this.location
    });
    this.resturant_inforarray = [];
    this.data_array = [];

   
    
  }
  get_resturant_name(id_: number){
    this.zomatoservice.searchresturantsById(id_).subscribe((data) =>
    {
    
      console.log("Hotels by place");
      console.log(data);
      for( var i=0 ; i < data['restaurants'].length; i++){
        let obj = new Resturants();
        console.log("Check");
        obj.name= data['restaurants'][i]['restaurant']['name'];
        obj.image_url = data['restaurants'][i]['restaurant']['featured_image'];
        console.log(data['restaurants'][i]['restaurant']['id']);
        console.log("Object");
        obj.id = data['restaurants'][i]['restaurant']['id'];
        console.log(obj);
        this.resturant_inforarray.push(obj)
       }
       console.log("Resturant info object");
       console.log(this.resturant_inforarray);
       

      
    }, (err) => {});

  }
  click_fav(get_id: any){
    console.log("Checking_id");
    console.log(get_id);
    this.click_id = get_id;
    console.log("getting it in the variable");
    console.log(this.click_id);
    this.zomatoservice.setVisitedIdToken(get_id, this.resturant_inforarray);
    this.rout.routeToDashboard();
    
  }


  locationSubmit() {

    this.zomatoservice.searchloacationName(this.location_entry.value.location).subscribe((data) =>
    {
      this.ngOnInit();
      this.data_array = data;

      console.log(this.data_array['location_suggestions'][0]['id']);
      this.id= this.data_array['location_suggestions'][0]['id'];
      if(this.id!== null){
    

        this.get_resturant_name(this.id);
      }
      else{
        this.errMessage = "Id doesnot exists";
      }

    }, (err)=>{
      this.errMessage = "Id doesnot exists";
     }
    );


  }




}
