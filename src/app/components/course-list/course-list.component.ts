import { Component } from '@angular/core';
import { Courses } from '../../models/courses';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'] 
})
export class CourseListComponent {
  courses: Courses[] = [];
  filteredCourses: Courses[] = [];
  searchTerm: string = '';
  sortKey: keyof Courses = 'code';
  sortAsc: boolean = true;


  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(term) ||
      course.coursename.toLowerCase().includes(term)
    );
    this.applySort();
  }

  applySort(): void {
    this.filteredCourses.sort((a, b) => {
      const valA = a[this.sortKey].toLowerCase();
      const valB = b[this.sortKey].toLowerCase();
      return this.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
  }

  setSort(key: keyof Courses): void {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
    this.applySort();
  }
}