import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  http = inject(HttpClient);

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.url);
  }
}
