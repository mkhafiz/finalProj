
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubModel } from './sub-response';
import { createSubPayload } from './create-sub/create-sub-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubModel>> {
    return this.http.get<Array<SubModel>>('http://localhost:8080/api/subreddit');
  }

  createSubreddit(subredditModel: createSubPayload): Observable<createSubPayload> {
    return this.http.post<createSubPayload>('http://localhost:8080/api/subreddit',subredditModel);
  }
}
