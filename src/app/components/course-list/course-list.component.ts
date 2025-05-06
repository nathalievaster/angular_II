import { Component } from '@angular/core';
import { Courses } from '../../models/courses';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'] 
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