//import './polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LocationresturantionComponent } from './locationresturantion/locationresturantion.component';
import { ZomatoserviceService } from './zomatoservice.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouterserviceService } from './routerservice.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {CanActiavteRouteGuard} from './can-actiavte-route.guard';
import { SignupComponent } from './signup/signup.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FavouriteserviceService} from './favouriteservice.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RatingModule } from 'ng-starrating';
import {AgmCoreModule } from '@agm/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: '', component: LocationresturantionComponent, pathMatch: 'full'},
   // canActivate: [CanActivateRouteGuard]},
   { path: 'dashboard', component: DashBoardComponent,
   canActivate: [CanActiavteRouteGuard]},
  {path: 'login', component:  LoginComponent },
  {path: 'signup', component: SignupComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    LocationresturantionComponent,
    LoginComponent,
    DashBoardComponent,
    SignupComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    MatListModule,
    RatingModule,
    //NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    MatExpansionModule,
    AppRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1KHu6ky5pSH-qEfBmKlgcFsAlOLNb3EQ'
    })
    

  



    
  ],
  entryComponents: [DashBoardComponent],
  exports: [RouterModule],
  providers: [ZomatoserviceService, AuthenticationService, RouterserviceService, FavouriteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(){
    library.add(fas);
  }
  //platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
}
