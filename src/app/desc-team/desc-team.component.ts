import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { TeamDet } from 'src/app/classes/teamDetails';
import { Player } from 'src/app/classes/playersTeam';
import { Nexts } from 'src/app/classes/nextEv';
import { Lasts } from 'src/app/classes/lastEv';
import { Table } from '../classes/table';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-desc-team',
  templateUrl: './desc-team.component.html',
  styleUrls: ['./desc-team.component.css']
})
export class DescTeamComponent implements OnInit {

  constructor(private _ConfigService: ConfigService, private route: ActivatedRoute) { }

  teamDetails: TeamDet[];
  playersTeam: Player[];
  nextEvents: Nexts[];
  lastEvents: Lasts[];
  table: Table[];

  ngOnInit() {

    this.route.params
    .subscribe(
      params => {
        const id = params.TeamId;

        this._ConfigService.getUnEquipo(id)
        .subscribe(
          (data)=>
          {
            this.teamDetails = data['teams'];
          })

        this._ConfigService.getJugadoresEquipo(id)
        .subscribe(
          (data)=>
          {
            this.playersTeam = data['player'];
          })

        this._ConfigService.getLastJuegos(id)
        .subscribe(
          (data)=>
          {
            this.lastEvents = data['results'];
          })

        this._ConfigService.getNextJuegos(id)
        .subscribe(
          (data)=>
          {
            this.nextEvents = data['events'];
          })
      });
      
      this._ConfigService.getTabla()
      .subscribe(
        (data) =>
        {
          this.table = data['table'];
        });

  }

}
