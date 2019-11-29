import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DescTeamComponent } from './desc-team/desc-team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescPlayerComponent } from './desc-player/desc-player.component';
import { EventsAllComponent } from './events-all/events-all.component';


const routes: Routes = [

    { path: 'welcome', component: WelcomeComponent },
    { path: 'TeamDet/:TeamId', component: DescTeamComponent },
    { path: 'PlayerInfo/:idPlayer', component: DescPlayerComponent },
    { path: 'AllEventsTeam/:idTeam', component: EventsAllComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
