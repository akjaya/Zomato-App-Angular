import { Component, OnInit, Input } from '@angular/core';
import { ZomatoserviceService} from '../zomatoservice.service';
import {FavouriteserviceService} from '../favouriteservice.service';
import {Resturants} from '../resturants';
import {RouterserviceService} from '../routerservice.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
   na : string ;
   get_array : Array<any> = [] ;
   display_arry : Array<any> = [];
   rest_list: Array<Resturants> =[] ;
   rest: Resturants = new Resturants();
   errMessage : string = "";
   star: number ;


  constructor(private authu: AuthenticationService,private rout: RouterserviceService,private zomatoServ : ZomatoserviceService, private favService : FavouriteserviceService) { 

  
  }
  starvalu(val){
    this.star = val;
    console.log("stars");
    console.log(this.star);
  }
  addingToFavourites(datavalue){
    this.favService.addfav(datavalue).subscribe(
      data => {
        //console.log("populating favourites list");
        //console.log(data);
      },
      error => {
             this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
           });
  }
  logout(){
    this.authu.clearBearerToken();
    this.rout.routeToHome();
  }
  displayingFavlist(){
    //console.log("Inside diaplayiFavList function");
    this.favService.getFavlist().subscribe(

      fav => {
        //console.log("fav");
        //console.log(fav)
        this.rest_list = fav;
      },
      err => this.errMessage = err.message,
    );
    
    //console.log(this.rest_list);
  }
  

  ngOnInit() {

  this.favService.fetchNotesFromServer();
  this.na = this.zomatoServ.getVisitedIdToken();
  this.get_array = this.zomatoServ.get_array_all();
  //console.log('getting_arry for zomato servics');
  //console.log(this.get_array);
  this.get_array.forEach(element => {

    if(element.id === this.na)
    {
      this.rest.id = element.id;
      this.rest.image_url = element.image_url;
      this.rest.name = element.name;
      this.rest.id = parseInt(element.id);

      //console.log("data to be sent");
      //console.log(this.rest);
      this.addingToFavourites(this.rest);
    }
    
  });
  this.displayingFavlist();
  }

}

