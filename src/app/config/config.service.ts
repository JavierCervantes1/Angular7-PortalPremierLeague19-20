import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {

  //let appUrl = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  constructor(private httpclient: HttpClient) { }

    getEquipos(): Observable<any>{
        return this.httpclient.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
    }

    getUnEquipo(idEquipo): Observable<any>{
        return this.httpclient.get('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + idEquipo);    
    }

    getJugadoresEquipo(idEquipo): Observable<any>{

        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + idEquipo)
    }

    getLastJuegos(idEquipo): Observable<any>{
        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=" + idEquipo);
    }

    getNextJuegos(idEquipo): Observable<any>{
        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" + idEquipo);
    }

    getTabla(): Observable<any>{
        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920");
    }

    getJugadorDet(idPlayer): Observable<any>{
        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=" + idPlayer);
    }

    getAllEvents(): Observable<any>{
        return this.httpclient.get("https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920");
    }

}