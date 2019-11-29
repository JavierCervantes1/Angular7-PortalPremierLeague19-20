import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { RouterModule, Routes, ROUTES, RouterLink } from '@angular/router';
import { DescTeamComponent } from './desc-team/desc-team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescPlayerComponent } from './desc-player/desc-player.component';
import { EventsAllComponent } from './events-all/events-all.component';

@NgModule({
  declarations: [
    AppComponent,
    DescTeamComponent,
    WelcomeComponent,
    DescPlayerComponent,
    EventsAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
