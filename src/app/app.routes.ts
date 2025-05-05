import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';

export const routes: Routes = [
    { path: 'courselist', component: CourseListComponent},
    { path: '', redirectTo: 'courselist', pathMatch: 'full' } 
];
