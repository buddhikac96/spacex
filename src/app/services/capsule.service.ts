import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capsule } from '../models/Capsule.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  constructor(
    private http: HttpClient
  ) { }

  getCapsules() : Observable<Capsule[]> {
    return this.http.get<Capsule[]>("https://api.spacexdata.com/v3/capsules");
  }
}
