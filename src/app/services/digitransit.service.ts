import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DigitransitService {

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http:HttpClient) { }

  getRoutes(stopName){
    const body = `{
                  stops(name: "${stopName}") {
                    name
    
                    patterns {
                      name
    
                      route	{
                      shortName
                      longName
    		              }
    		            directionId
		                }
	                }
                }`;

    const settings = {
      headers: new HttpHeaders().set('Content-type', 'application/graphql')
    };

    return this.http.post(this.apiUrl, body, settings);
  }
}
