import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BasicAuthHtppInterceptorServiceService} from './service/basic-auth-htpp-interceptor-service.service';
import { UpdateComponent } from './update/update.component';
import { GameComponent } from './game/game.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatGridListModule  } from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    UpdateComponent,
    GameComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorServiceService,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
