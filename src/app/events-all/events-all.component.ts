import { Component, OnInit } from '@angular/core';
import { All } from '../classes/matches';
import { TeamDet } from 'src/app/classes/teamDetails';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-all',
  templateUrl: './events-all.component.html',
  styleUrls: ['./events-all.component.css']
})
export class EventsAllComponent implements OnInit {

  constructor(private _ConfigService: ConfigService, private route: ActivatedRoute) { }

  team: TeamDet[];
  events: All[];
  evsTeam: any[] = [];

  ngOnInit() {

    this.route.params
    .subscribe(
      params => {
        const id = params.idTeam;
        this._ConfigService.getUnEquipo(id)
        .subscribe(
          (data)=>
          {
            this.team = data['teams'];
          })

          this._ConfigService.getAllEvents()
          .subscribe(
            (data) => 
            {
              this.events = data['events'];
              this.events.forEach( evt => {
                if(evt.idHomeTeam === id || evt.idAwayTeam === id){
                  this.evsTeam.push(evt);
                }
              });
            });

            

        });

    this._ConfigService.getAllEvents()
    .subscribe(
      (data) => 
      {
        this.events = data['events'];
      });

  }
  
  /*filterFunction(items): any[] {  
    this.route.params.subscribe(

      params =>{
        const id = params.idTeam;
        transform(items: any[], term: string): any {
          return items.filter(item => item.id.indexOf(term) !== -1);
      }
      });
      return items;
  }*/

}
