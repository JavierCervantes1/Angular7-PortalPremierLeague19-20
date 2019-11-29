import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { PlayerInf } from '../classes/playerInfo';

@Component({
  selector: 'app-desc-player',
  templateUrl: './desc-player.component.html',
  styleUrls: ['./desc-player.component.css']
})
export class DescPlayerComponent implements OnInit {

  constructor(private _ConfigService: ConfigService, private route: ActivatedRoute) {}

  playerInfo: PlayerInf[];

  ngOnInit() {
  
  this.route.params
    .subscribe(
      params => {
        const id = params.idPlayer;

        this._ConfigService.getJugadorDet(id)
        .subscribe(
          (data)=>
          {
            this.playerInfo = data['players'];
          })

      });
    }
    
}
