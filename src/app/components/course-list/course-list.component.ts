import { Component } from '@angular/core';
import { Courses } from '../../models/courses';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Courses[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

}