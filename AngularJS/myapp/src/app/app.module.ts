import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './Signup/Signup.component';
import { ProfileComponent } from './Profile/Profile.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';









@NgModule({
  declarations: [								
    AppComponent,
      HeaderComponent,
      NavigationComponent,
      LoginComponent,
      SignupComponent,
      ProfileComponent,
      AccountsInfoComponent,
      AccountsInfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
