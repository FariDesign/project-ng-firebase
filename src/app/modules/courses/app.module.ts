import { MaterialModule } from "./../../material.module";
import { AppRoutingModule } from "./../../app-routing.module";
import { NgModule } from "@angular/core";
import { CoursesComponent } from "./components/courses/courses.component";

import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [CoursesComponent],
  imports: [AppRoutingModule, MaterialModule, CommonModule, FlexLayoutModule],
  exports: [],
  providers: [],
  bootstrap: []
})
export class AppModuleCourses {}
