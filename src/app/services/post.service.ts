import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { BehaviorSubject, Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Post } from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts`)
      .pipe(map(posts => {
          return posts;
      }));
  }
}
