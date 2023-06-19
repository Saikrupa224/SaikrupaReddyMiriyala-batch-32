import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './Signup/Signup.component';
import { ProfileComponent } from './Profile/Profile.component';



@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      NavigationComponent,
      LoginComponent,
      SignupComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
