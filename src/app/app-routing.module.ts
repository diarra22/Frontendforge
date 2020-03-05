import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService] },
  { path: 'update', component: UpdateComponent, canActivate:[AuthGaurdService] },
  { path: 'game', component: GameComponent, canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
