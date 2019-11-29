import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Teams } from '../classes/teams';
import { SafeMethodCall } from '@angular/compiler';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _ConfigService: ConfigService) { }

  lstTeams: Teams[];
  favoritos: Teams[] = []; 
  favSafe = this.showFavs();

  ngOnInit() {

    this._ConfigService.getEquipos()
    .subscribe
    (
      (data)=>
      {
        this.lstTeams = data['teams'];
      }
    );

  }
  

  saveFavs(idTeam){
    let guardados;
    if (JSON.parse(localStorage.getItem('favs')) != null) {
    guardados = JSON.parse( localStorage.getItem('favs'));
    this.favoritos = guardados;
    } else { guardados = [] }

      this.lstTeams.forEach(eqp => {
        let sw = 1;

        guardados.forEach(safe => {
          if (eqp.idTeam == safe.idTeam){
            sw = 0;
          }
        });

        if(eqp.idTeam == idTeam && sw == 1){  
          console.log(this.favoritos);
          this.favoritos.push(eqp);
          console.log(this.favoritos);
          localStorage.setItem('favs', JSON.stringify(this.favoritos));
        }
      });
    
  }

  showFavs(){
    if (JSON.parse( localStorage.getItem('favs')) != null) {
      return JSON.parse( localStorage.getItem('favs'));
    } else { 
      return ''; }
  }
  
}
