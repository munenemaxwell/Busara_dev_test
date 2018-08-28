import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { JwtModule } from '@auth0/angular-jwt'; //http request interceptor 

//////modules for videogular

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {

    
        tokenGetter: jwtTokenGetter(),
        whitelistedDomains: ['http://api.smartduka.busaracenterlab.org'],
        blacklistedRoutes: []
      }
    }),

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

