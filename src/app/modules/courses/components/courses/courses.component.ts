import { CourseService } from "./../../services/course.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

import { CategoriesService } from "src/app/modules/common/services/categories.service";
import { collectExternalReferences, ThrowStmt } from "@angular/compiler";

import { map, mergeMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit, OnDestroy {
  categories: any[];
  courses: any[];
  sub: Subscription;

  constructor(
    private categoriesService: CategoriesService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.sub = this.categoriesService
      .getAllCategories()
      .pipe(
        mergeMap(categories =>
          this.courseService
            .getAllCourses()
            .pipe(map(courses => [categories, courses]))
        )
      )
      .subscribe(([categories, courses]) => {
        this.categories = categories;
        this.courses = courses;

        console.log(categories);
        console.log(courses);
      });
  }

  OnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCoursesByCategory(key) {
    return this.courses.filter(c => c.categorie == key);
  }
}
